var multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "../public/uploads/");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "-" + Date.now() + Path.extname(file.originalname)
      );
      console, log(file.fieldname);
    },
  }),
}).single("image");
module.exports = upload;
