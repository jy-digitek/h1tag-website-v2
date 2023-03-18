var multer = require("multer");
const { normalize } = require("path");
//const patg=require('')

let destination = "";
// "../h1blogs/public/uploads"
console.log("destination", destination);
//const require('./')

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../h1blogs/public/uploads");
  },
  filename: (req, file, callback) => {
    // callback(null, `image-${Date.now()}.${file.originalname}`);
    console.log("file.....", file.originalname);
    callback(null, file.originalname);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("only image is allowed"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

module.exports = upload;
