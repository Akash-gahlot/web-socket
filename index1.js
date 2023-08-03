const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const path = require("path");
const PORT = 3000;

app.get("/", (req, resp) => { 
    var option = {
        root: path.join(__dirname)
    }
    resp.sendFile("index.html", option);
})
http.listen(PORT, () => { 
    console.log(`Server listening on PORT ${PORT}`);
})
