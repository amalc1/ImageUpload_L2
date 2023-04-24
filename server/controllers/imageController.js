const { ImageUrl } = require("../model/imageUrl");
const path = require("path");

module.exports = {
  doImageUpload: async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const imgURL =
        req.protocol + "://" + req.get("host") + "/" + req.file.filename;
      const imageUrl = new ImageUrl({ imageURL: imgURL });
      await imageUrl.save();
      res.status(200).json({ imgURL });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to upload image" });
    }
  },
  getAllImages: async (req, res) => {
    try {
      let images = (await ImageUrl.find({})).reverse();
      console.log(images);
      res.status(200).send(images);
    } catch (error) {
      console.log(error);
    }
  },
};
