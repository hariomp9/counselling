const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
        type: String
    },
    description: {
      type: String,
    },
    doc_url: {
      type: String,
    },
    Start_date: {
      type: Date,
    },

    End_date: {
      type: Date,
    },

  },
  {
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
