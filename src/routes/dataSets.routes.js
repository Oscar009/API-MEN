const express = require("express");
const router = express.Router();

const DataSet = require("../models/dataSet");

router.get("/", (req, res) => {
  DataSet.find((err, dataSets) => {
    console.log(dataSets);
  });
  res.json({
    status: "API works",
  });
});

module.exports = router;
