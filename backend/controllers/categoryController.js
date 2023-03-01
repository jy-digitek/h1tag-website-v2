const Categories = require("../modals/categories");
const Post = require("../modals/post");

module.exports = {
  createCategories: async (req, res) => {
    try {
      const category = req.body;
      const newCategory = await Categories.create(category);
      await Post.updateMany(
        { _id: newCategory.posts },
        { $push: { posts: newCategory._id } }
      );
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  gettAllCategory: async (req, res) => {
    try {
      const category = await Categories.find();
      res.status(201).json(category);
    } catch (error) {
      return res.status(501).send(error);
    }
  },
  category: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "category not found" });
      }
      const category = await Categories.findById(id).populate("posts");
      res.status(201).json(category);
    } catch (error) {
      return res.status(501).json(error);
    }
  },
  updateCategory: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "category not found" });
      }
      const updatedCategories = await Categories.findByIdAndUpdate(
        id,
        req.body
      );
      return res.status(201).json(updatedCategories);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
