const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    blogId: {
      type: Number,
    },
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },

    body: {
      type: String,
      require,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.plugin(AutoIncrement, { inc_field: "blogId" });

const Comment = mongoose.model("comments", commentSchema);
module.exports = Comment;
