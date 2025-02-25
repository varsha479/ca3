const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dish: { type: String, unique: true, required: true },
  contact: String,
});

module.exports = mongoose.model("dishes", dishSchema);
