const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  imageURL: String,
});

const ImageUrl = mongoose.model("urls", ImageSchema);
module.exports = { ImageUrl };
