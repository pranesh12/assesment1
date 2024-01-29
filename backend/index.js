const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const blogRouter = require("./routes/blog");
const commentRouter = require("./routes/comment");

app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

//usign Router

// app.use("/", "Hello ");
app.use("/comment", commentRouter);
app.use("/blogs", blogRouter);

mongoose.connect(`mongodb://127.0.0.1:27017/blog`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(5000, () => {
    console.log(`server is runnit on 5000`);
  });
});
