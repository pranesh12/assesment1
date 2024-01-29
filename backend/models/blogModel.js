const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    id: {
      type: Number,
    },
    userId: {
      type: Number,
    },
    title: {
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
blogSchema.plugin(AutoIncrement, { inc_field: "id" });
blogSchema.plugin(AutoIncrement, { inc_field: "userId" });

const Blog = mongoose.model("blogs", blogSchema);
module.exports = Blog;
