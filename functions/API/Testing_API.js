const admin = require("firebase-admin");
const express = require("express");
const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });
const cors = require("cors");

const Testing = express();
Testing.use(cors({ origin: true }));

Testing.get("/", async (req, res) => {
    res.send("Hello from firebase API")
})



module.exports = { Testing };