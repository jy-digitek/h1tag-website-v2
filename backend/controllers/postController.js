const Post = require("../modals/post");
const Categories = require("../modals/categories");
var fs = require("fs");
var path = require("path");

module.exports = {
  //admin---set
  postCreate: async (req, res) => {
    try {
      console.log("--->", req.file);
      // console.log(fs);
      //console.log(fs.readFileSync("uploads/" + req.file.filename));
      var obj = {
        title: req.body.title,
        slug: req.body.slug,
        image: req.file.filename,
        categories: req.body.categories,
        summary: req.body.summary,
        body: req.body.body,
        image: req.file.path,
      };

      //console.log(obj);
      const newPost = await Post.create(obj);
      //console.log(newPost);
      console.log(newPost);
      const cat = await Categories.updateMany(
        { _id: newPost.categories },
        { $push: { posts: newPost._id } }
      );
      //  console.log(cat, "category");
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
      const deletedData = await Post.findById(id);
      deletedData.isActive = false;
      return res.status(200).json({ message: "data is deleted", deletedData });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};
