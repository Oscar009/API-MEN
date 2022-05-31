const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const URI = "mongodb://localhost/mern";

mongoose
  .connect(URI)
  .then((db) => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log("error");
  });

  module.exports = mongoose;