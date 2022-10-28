import { ipcInit } from "photon-lib-js";

const ipc = ipcInit("53174");

export default ipc;

// ipc.on("open", () => {
//   output.value.innerHTML += "Status: Connected\n";
// });

// ipc.on("message", (payload, event) => {
//   output.value.innerHTML += "Server: " + payload.message + "\n";
//   output.value.innerHTML += "Server: " + payload.id + "\n";
// });

// const send = () => {
//   ipc.emit("message", {
//     message: input.value.value,
//   });
//   input.value.value = "";
// };
