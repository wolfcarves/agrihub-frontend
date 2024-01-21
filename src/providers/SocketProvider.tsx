import React from "react";
import { useEffect } from "react";
import { socket } from "../socket/socket";
import useAuth from "../hooks/useAuth";
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

    return () => {
      socket.off("data?.id" ?? "", () => console.log("unlisten"));
      socket.off("admin", () => console.log("unlisten"));
    };
  }, [data]);
  return <>{props.children}</>;
};

export default SocketProvider;
