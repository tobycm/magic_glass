import bc from "./bc.js";

let imFirst = true;

bc.postMessage("first");

bc.addEventListener("message", (message) => {
  if ("type" in message.data && "data" in message.data) {
    if (message.data.type === "first") {
      bc.postMessage("nah");
    }

    if (message.data.type === "nah") {
      imFirst = false;
    }

    if (message.data.type === "loc" && !imFirst) {
    }

    if (message.data.type === "size" && !imFirst) {
    }
  }
});

const app = document.getElementById("app");

const sendMessageButton = document.createElement("button");
sendMessageButton.innerText = "Send message";
sendMessageButton.addEventListener("click", () => {
  bc.postMessage("Hello world!");
});

app.appendChild(sendMessageButton);

let lastCoords = [0, 0];
let lastSize = [0, 0];
setInterval(() => {
  const coords = [window.screenX, window.screenY];
  const size = [window.innerWidth, window.innerHeight];

  if (coords[0] !== lastCoords[0] || coords[1] !== lastCoords[1]) {
    bc.postMessage({ type: "loc", data: coords });
    lastCoords = coords;
  }

  if (size[0] !== lastSize[0] || size[1] !== lastSize[1]) {
    bc.postMessage({ type: "size", data: size });
    lastSize = size;
  }
}, Math.round(1000 / 60));
