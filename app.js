const { static } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const views = path.join(__dirname,"views")
console.log(__dirname);
app.use(express.static('public'));


app.get("/",(req,res) => res.sendFile(path.join(views,"home.html")))
app.get("/contact",(req,res) => res.sendFile(path.join(views,"contact.html")))
app.get("/about",(req,res) => res.sendFile(path.join(views,"about.html")))

app.get("/music",(req,res) => res.sendFile(path.join(views,"music.html")))






app.listen(port,() => console.log("El servidor corriendo en el puerto"+ port))

//npx nodemon app.js para ejecutarlo