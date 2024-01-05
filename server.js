
const express = require("express");
const   {mongoose}  = require("mongoose");
const router = express.Router()
const app = express();
require("dotenv").config()




app.get("/api/:message", (req, res) =>{
    res.status(200).send(req.params.message)
})

app.post("/api/form", (req, res) =>{
    console.log(req.body);
})

app.use(express.json())







app.listen(8000, () => console.log(`server is running`))