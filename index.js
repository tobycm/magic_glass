import bc from "./bc.js";

bc.addEventListener("message", (message) => {
  console.log(message);
});

const app = document.getElementById("app");

const sendMessageButton = document.createElement("button");
sendMessageButton.innerText = "Send message";
sendMessageButton.addEventListener("click", () => {
  bc.postMessage("Hello world!");
});

app.appendChild(sendMessageButton);
