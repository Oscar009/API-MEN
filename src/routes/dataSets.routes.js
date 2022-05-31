const express = require("express");
const router = express.Router();

const DataSet = require("../models/dataSet");

router.get("/", async (req, res) => {
  const dataSets = await DataSet.find();
  res.json(dataSets);
});

router.get("/:id", async (req, res) => {
  const dataSet = await DataSet.findById(req.params.id);
  res.json(dataSet);
});

router.post("/", async (req, res) => {
  const { data } = req.body;
  const dataSet = new DataSet({ data });
  await dataSet.save();
  res.json({ status: "DataSet saved" });
});

router.delete("/:id", async (req, res) => {
  await DataSet.findByIdAndRemove(req.params.id);
  res.json({ status: "DataSet deleted" });
});

module.exports = router;
