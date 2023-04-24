const express = require("express");
const {
  doImageUpload,
  getAllImages,
} = require("../controllers/imageController");
const upload = require("../multer/storage");
const router = express.Router();

router.post("/upload", upload.single("image"), doImageUpload);
router.get("/images", getAllImages);

module.exports = router;
