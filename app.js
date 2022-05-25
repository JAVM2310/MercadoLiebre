const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(3000, () => {console.log("levantado el servidor en el puerto 3000")
});

app.use(express.static('public'));