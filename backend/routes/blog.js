const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router
  .get("/", getBlogs)
  .post("/createBlog", createBlog)
  .get("/:id", getBlogById)
  .put("/:id", updateBlog)
  .delete("/:id", deleteBlog);

module.exports = router;
