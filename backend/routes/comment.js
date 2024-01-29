const express = require("express");
const router = express.Router();
const {
  getblogsComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router
  .get("/", getblogsComments)
  .post("/createcomment", createComment)
  .get("/:id", getCommentById)
  .put("/:id", updateComment)
  .delete("/:id", deleteComment);

module.exports = router;
