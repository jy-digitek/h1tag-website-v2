const categoryController = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/auth");

router
  .route("/createcategories")
  .post(adminAuth.adminAuth, categoryController.createCategories);
router.route("/getallcategory").get(categoryController.gettAllCategory);
router.route("/category/:id").get(categoryController.category);
router
  .route("/category/:id")
  .put(adminAuth.adminAuth, categoryController.updateCategory);
router
  .route("/category/:id")
  .delete(adminAuth.adminAuth, categoryController.deleteCategory);

module.exports = router;
