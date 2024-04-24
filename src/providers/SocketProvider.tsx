import React from "react";
import { useEffect } from "react";
import { socket } from "../socket/socket";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { showNotificationBadge } from "../redux/slices/notificationSlice";

// const api_uri =
//   import.meta.env.VITE_DEV_STATE === "production"
//     ? "https://api.qc-agrihub.xyz"
//     : "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: "https://api.qc-agrihub.xyz",
  withCredentials: true
});

const SocketProvider = (props: { children: React.ReactNode }) => {
  const { data } = useAuth();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

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
    console.log(payload, "WEB SOCKET");
    queryClient.invalidateQueries({ queryKey: ["GET_USER_NOTIFICATIONS"] });
    if (Notification.permission === "granted") {
      new Notification("Hello!", {
        body: payload
      });
      localStorage.removeItem("notification");
      dispatch(showNotificationBadge());
    } else {
      console.log("Permission not granted to show notifications.");
    }
  };

  useEffect(() => {
    requestNotificationPermission();

    socket.on(data?.id ?? "", payload => showNotification(payload));

    if ("serviceWorker" in navigator) {
      const handleServiceWorker = async () => {
        try {
          const register = await navigator.serviceWorker.register(
            import.meta.env.MODE === "production"
              ? "/sw.js"
              : "/dev-sw.js?dev-sw",
            {
              type: import.meta.env.MODE === "production" ? "classic" : "module"
            }
          );

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
