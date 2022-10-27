const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

app.use(express.static('public')); // Recursos estaticos

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

app.get("/", (req,res) => { 
    res.sendFile(path.resolve("./views/home.html"));
});

app.get("/carrito", (req,res) => {
    res.sendFile(path.resolve("./views/carrito1.html"));
});

app.get("/register", (req,res) => {
    res.sendFile(path.resolve("./views/register.html"));
});