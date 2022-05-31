const express = require("express");
const router = express.Router();

const DataSet = require("../models/dataSet");

router.get("/", async (req, res) => {
  const dataSets = await DataSet.find();
  res.json(dataSets);
});

router.post("/", async (req, res) => {
  const { data } = req.body;
  const dataSet = new DataSet({ data });
  await dataSet.save();
  res.json({ status: "DataSet saved" });
});

module.exports = router;
