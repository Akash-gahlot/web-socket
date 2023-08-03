const app = require("express")();
const path = require("path");
const http = require("http").Server(app);
const PORT = 3000;
const io = require("socket.io")(http);

app.get("/", (req, resp) => { 
  const options = {
    root: path.join(__dirname)
  }
  resp.sendFile("index.html",options);
})
var room = io.of("/room");
var room2 = io.of("/room-2");
room.on("connection", (socket) => {
  console.log("user connected");
  room.emit("room-event","welcome to my room 1");
  socket.on("disconnect", () => {
    console.log("user is disconnected");  
  })
})
room2.on("connection", (socket) => {
  console.log("user connected");
  room2.emit("room-event-2","welcome to my room 2");
  socket.on("disconnect", () => {
    console.log("user is disconnected");  
  })
})
http.listen(PORT, () => { 
  console.log(`Server running on PORT : ${PORT}`);
})