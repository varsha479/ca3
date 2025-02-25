require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const restaurants =require("./restaurantShema");
const dishes = require("./dish Schema");

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("database is connected"))
.catch((err)=>console.error("error in database connection"));

app.listen(3000, () => console.log(" Server running on http://localhost:3000"));

