require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // allow large images

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

const News = require("./models/News");

// POST /api/news
app.post("/api/news", async (req, res) => {
  try {
    console.log("Incoming news:", req.body);
    const { title, content, image } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const news = new News({ title, content, image });
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    console.error("Error saving news:", err);
    res.status(500).json({ message: err.message });
  }
});

// GET /api/news
app.get("/api/news", async (req, res) => {
  const items = await News.find().sort({ createdAt: -1 });
  res.json(items);
});

app.listen(process.env.PORT, () =>
  console.log(`🚀 News backend running on http://localhost:${process.env.PORT}`)
);
