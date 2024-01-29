const Blog = require("../models/blogModel");

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.status(200).json(blogs);
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOne({ userId: id });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, body } = req.body;
    await Blog.create({
      title,
      body,
    });

    res.status(201).json({ message: "blog created  Successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findOneAndUpdate({ userId: id }, req.body, {
      new: true,
    });
    const updatedBlog = await blog.save();
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findOneAndDelete({ userId: id });
    res.json({ message: "Blog has been deleted" });
  } catch (error) {
    res.json(error);
  }
};
