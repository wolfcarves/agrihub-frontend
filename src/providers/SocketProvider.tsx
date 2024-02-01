import React from "react";
import { useEffect } from "react";
import { socket } from "../socket/socket";
import useAuth from "../hooks/useAuth";
import axios from "axios";

// const api_uri =
//   import.meta.env.VITE_DEV_STATE === "development"
//     ? "http://localhost:3000"
//     : "https://qc-agrihub.xyz";

const api_uri = "https://qc-agrihub.xyz";

const axiosInstance = axios.create({
  baseURL: api_uri,
  withCredentials: true
});

const SocketProvider = (props: { children: React.ReactNode }) => {
  const { data } = useAuth();

  const requestNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
      } else {
        console.log("Notification permission denied.");
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  const showNotification = (payload: string) => {
    console.log(payload);
    if (Notification.permission === "granted") {
      new Notification("Hello!", {
        body: payload
      });
    } else {
      console.log("Permission not granted to show notifications.");
    }
  };

  useEffect(() => {
    requestNotificationPermission();

    if (data?.role === "admin") {
      socket.on("admin", payload => showNotification(payload));
    } else {
      socket.on(data?.id ?? "", payload => showNotification(payload));
    }

    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        try {
          const register = await navigator.serviceWorker.register("sw.js");

          const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: import.meta.env.VITE_VAPID_PUBLIC_KEY
          });

          await axiosInstance.post(
            "/api/notification/subscribe",
            subscription as any
          );
        } catch (error) {
          console.log(error);
        }
      };
      handleServiceWorker();
    }

    return () => {
      socket.off("data?.id" ?? "", () => console.log("unlisten"));
      socket.off("admin", () => console.log("unlisten"));
    };
  }, [data]);
  return <>{props.children}</>;
};

export default SocketProvider;
