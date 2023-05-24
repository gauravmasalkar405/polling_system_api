const mongoose = require("mongoose");

// option model
const Option = require("./options");

// creating a questions schema
const Question = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Option",
    },
  ],
});

// setting it as a Model
const Questions = mongoose.model("Questions", Question);

// Exporting Questions Model
module.exports = Questions;
