const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let seersearch = new Schema(
  {
    submitterName: {
      type: String,
    },
    title: {
      type: String,
    },
    datePublished: {
      type: Date,
    },
    author: {
      type: String,
    },
    keyword: {
      type: String,
    },
    abstract: {
      type: String,
    },
    sourcedb: {
      type: String,
    },
  },
  {
    collection: "Articlesearch",
  }
);
module.exports = mongoose.model("seersearch", seersearch);
