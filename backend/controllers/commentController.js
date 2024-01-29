const Comment = require("../models/commentModel");

exports.getComments = async (req, res) => {
  const comments = await Comment.find({});
  res.status(200).json(comments);
  try {
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Comment.findOne({ blogId: id });
    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createComment = async (req, res) => {
  try {
    const { name, email, body } = req.body;

    await Comment.create({
      name,
      email,
      body,
    });

    res.status(201).json({ message: "Comment created  Successfully" });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateComment = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const comment = await Comment.findOneAndUpdate({ blogId: id }, req.body, {
      new: true,
    });
    const updatedComment = await comment.save();
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Comment.findOneAndDelete({ blogId: id });
    res.json({ message: "comment has been deleted" });
  } catch (error) {
    res.json(error);
  }
};
