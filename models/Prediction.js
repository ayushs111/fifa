const mongoose = require("mongoose");

const Prediction = mongoose.Schema({
  usr: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  match: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "match",
  },
});

module.exports = mongoose.model("Prediction", Prediction);
