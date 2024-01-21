import { io } from "socket.io-client";

const DEV_STATE = import.meta.env.VITE_DEV_STATE;
const URL =
  DEV_STATE === "production"
    ? "https://qc-agrihub.xyz/"
    : "http://localhost:3000";

export const socket = io(URL as string);
