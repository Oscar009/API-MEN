const express = require("express");
const router = express.Router();

const DataSet = require("../models/dataSet");

router.get("/", async (req, res) => {
  const dataSets = await DataSet.find();
  res.json(dataSets);
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.json("received");
});

module.exports = router;
