const postController = require("../controllers/postController");
const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/auth");

router
  .route("/postcreate")
  .post(adminAuth.adminAuth, postController.postCreate);
router.route("/posts").get(postController.allPosts);
router.route("/:id").get(postController.getPost);
router.route("/:id").put(adminAuth.adminAuth, postController.updatePost);
router.route("/:id").delete(postController.deletePost);

module.exports = router;
