const Post = require("../modals/post");
const Categories = require("../modals/categories");

module.exports = {
  //admin---set
  postCreate: async (req, res) => {
    try {
      const post = req.body;
      console.log(req.body);
      const newPost = await Post.create(post);
      console.log(newPost);
      const cat = await Categories.updateMany(
        { _id: newPost.categories },
        { $push: { posts: newPost._id } }
      );
      console.log(cat, "category");
      return res.status(201).json(newPost);
    } catch (error) {
      return res.status(500).json({ error: "can not be stored" });
    }
  },
  allPosts: async (req, res) => {
    try {
      const { page = 1, limit = 9 } = req.query;

      const posts = await Post.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      // .exex();
      const count = await Post.countDocuments();

      return res.status(201).json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (error) {
      return res.send(500).json(error);
    }
  },
  getPost: async (req, res) => {
    try {
      const id = req.params.id;
      const post = await Post.findById(id).populate("categories");
      return res.status(201).json({ post: post });
    } catch (error) {
      return res.status(500).json();
    }
  },
  updatePost: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(404).json({ message: "user not found" });
      }
      const updatePost = await Post.findByIdAndUpdate(id, req.body);
      return res.status(201).json({ message: "post updated", updatePost });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedData = await Post.findByIdAndDelete(id);
      return res.status(201).json({ message: "data is deleted", deletedData });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
