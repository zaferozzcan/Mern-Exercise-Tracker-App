const express = require("express");
const cors = require("cors");

require("dotenv").config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.listen(port, function(){
    console.log("Server is running on port: 5000");   
})