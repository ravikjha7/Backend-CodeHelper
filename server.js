const express = require('express');
const app = express();
const connectDB = require("./db");
require("dotenv").config();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to CodeHelper !!!");
})