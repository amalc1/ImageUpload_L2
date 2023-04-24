const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");

const imgUploadRoutes = require("./routes/imageUpload");

app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));
app.use(express.json());
// app.use(express.urlencoded());
app.use(cookieParser());
app.use(logger("dev"));

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

//routing
app.use("/", imgUploadRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
