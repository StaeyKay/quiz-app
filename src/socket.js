import { io } from "socket.io-client";

const socket = io("https://quiz-api-yk9k.onrender.com", { autoConnect: false });

export default socket;
