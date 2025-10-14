// server.js
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Needed to call Google Apps Script

const app = express();
const PORT = 5001;

// Enable CORS for your React frontend
app.use(cors({ origin: "http://localhost:5173" }));

// Parse JSON request bodies
app.use(express.json());

// Join Us form endpoint
app.post("/joinus", async (req, res) => {
  console.log("Incoming request body:", req.body);

  try {
    // Forward the data to your Google Apps Script Web App
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzPFNbliQfkFfMBtUlIrJ7iZrU4fkhDAuenybcQSbs2WOXk0Blj7m-5a_DUQZkQQKT5WA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    const result = await response.json();
    console.log("Response from Google Script:", result);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error forwarding request:", error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
