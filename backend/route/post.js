const postController = require("../controllers/postController");
const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/auth");

const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
// import upload from "../middleware/upload";
// console.log(upload);
const upload = require("../middleware/upload");
router
  .route("/postcreate")
  .post(adminAuth.adminAuth, upload.single("image"), postController.postCreate);
router.route("/posts").get(postController.allPosts);
router.route("/:id").get(postController.getPost);
router.route("/:id").put(adminAuth.adminAuth, postController.updatePost);
router.route("/:id").delete(adminAuth.adminAuth, postController.deletePost);
router
  .route("/visible/:id")
  .put(adminAuth.adminAuth, postController.visiblePost);

module.exports = router;
