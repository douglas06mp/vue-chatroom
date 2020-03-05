const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen("8080", () =>
  console.log("Server start on port 8080")
);

const io = socket(server);
io.on("connection", () => {
  console.log("Server connnect");
});
