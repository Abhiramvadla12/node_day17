var express = require("express");
var multer = require("multer");
var path = require("path");
var fs = require("fs");
var app = express();
//to get form data from forntend
app.use(express.urlencoded({ extended: true }));
if (!fs.existsSync(__dirname + "/images")) {
  fs.mkdirSync(__dirname + "/images");
}

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({ storage: storage });

app.post("/register", upload.single("file"), (req, res) => {
  const file = req.file;
//   console.log(req.file);
  const extensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];//only images files are allowed
  const maxSize = 100* 1024;//maximum size is 100kb

  if (!file) {
    res.status(400).send("No file uploaded.");
  } else if (
    !extensions.includes(path.extname(file.originalname).toLowerCase())//condition for checking the extensions
  ) {
    fs.unlinkSync(file.path);
    res.status(400).send("Invalid file type. Only .png, .jpeg, .gif, .webp, .svg or .jpg files are allowed.");
  } else if (file.size > maxSize) {//condition  for checking file size
    fs.unlinkSync(file.path);
    res.status(400).send("File too large. Maximum size is 100KB.");
  } else {
    const response = {
      ...req.body,
      filepath: file.path,
      filesize: (file.size / 1024).toFixed(2) + " KB"
    };
    res.status(201).send({
      status: 201,
      message: "File successfully uploaded",
      data: response
    });
  }
});

var port = 3002;
app.listen(port, () => {
  console.log("server running");
});