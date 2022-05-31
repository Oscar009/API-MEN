const mongoose = require("mongoose");
const { Schema } = mongoose;

const DataSetSchema = new Schema({
  data: { type: Object, required: true },
});

module.exports = mongoose.model("dataSet", DataSetSchema);
