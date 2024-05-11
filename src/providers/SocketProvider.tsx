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
  baseURL: "https://apiv2.qc-agrihub.xyz",
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

  type Payload = {
    userid: string;
    event: string;
  };

  const parsePayload = (payload: string): Payload => JSON.parse(payload);

  const showNotification = (payload: string) => {
    console.log(payload, "WEB SOCKET");
    queryClient.invalidateQueries({ queryKey: ["GET_USER_NOTIFICATIONS"] });
    if (
      Notification.permission === "granted" &&
      payload !== "CHAT_EVENT_TRIGGER"
    ) {
      new Notification("Hello!", {
        body: payload
      });
      localStorage.removeItem("notification");
      dispatch(showNotificationBadge());
    } else {
      console.log("Permission not granted to show notifications.");
    }
  };

  const triggerMessageNotif = (payload: string) => {
    queryClient.invalidateQueries({ queryKey: ["PRIVATE_CHAT"] });
    console.log(payload, "EVENT TRIGGERED");
    const parsedPayload = parsePayload(payload);

    if (
      Notification.permission === "granted" &&
      parsedPayload.userid !== data?.id &&
      (data?.role === "farm_head" ||
        data?.role === "asst_admin" ||
        data?.role === "admin")
    ) {
      new Notification("Hello!", {
        body: "New Message Received"
      });
    } else {
      console.log("Permission not granted to show notifications.");
    }
  };

  useEffect(() => {
    requestNotificationPermission();

    socket.on(data?.id ?? "", payload => showNotification(payload));

    socket.on("farm_head", (payload: string) => triggerMessageNotif(payload));

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
      socket.off("farm_head", () => console.log("unlisten"));
    };
  }, [data]);
  return <>{props.children}</>;
};

export default SocketProvider;
