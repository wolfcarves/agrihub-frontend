import { io } from "socket.io-client";

const DEV_STATE = import.meta.env.VITE_DEV_STATE;
const URL = "https://api.qc-agrihub.xyz";

export const socket = io(URL as string);
