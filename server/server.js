// server.js
import express from 'express';
import cors from "cors"
import 'dotenv/config'; // Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 3001; // Use port 3001 for the backend

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})); // Enable Cross-Origin Resource Sharing

// Dummy data for the intern
const internData = {
  name: "Your Name",
  referralCode: "yourname2025",
  donationsRaised: 15000,
};

// Bonus: Dummy data for the leaderboard
const leaderboardData = [
    { name: "Alex Doe", donationsRaised: 25000 },
    { name: "Your Name", donationsRaised: 15000 },
    { name: "Jane Smith", donationsRaised: 12000 },
    { name: "Sam Wilson", donationsRaised: 9500 },
    { name: "Chris Lee", donationsRaised: 7200 },
];


// API endpoint to get the main intern data
app.get('/api/dashboard', (req, res) => {
  res.json(internData);
});

// Bonus: API endpoint to get leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});