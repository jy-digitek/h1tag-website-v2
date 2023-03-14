var multer = require("multer");
const { normalize } = require("path");

let destination = "./../uploads/";
// "../h1blogs/public/uploads"
console.log("destination", destination);
//const require('./')

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, normalize(destination));
  },
  filename: (req, file, callback) => {
    // callback(null, `image-${Date.now()}.${file.originalname}`);
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

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, res, cb) => {
//       cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//       cb(
//         null,
//         file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//       );
//       // console.log(file.fieldname);
//     },
//   }),
// });
module.exports = upload;
