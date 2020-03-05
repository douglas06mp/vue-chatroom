const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen("8080", () =>
  console.log("Server start on port 8080")
);

const io = socket(server);
io.on("connection", socket => {
  console.log("Server connnect");

  socket.on("sendMessage", data => {
    io.sockets.emit("sendMessage", data);
  });
});
