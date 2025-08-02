import express from 'express';
import cors from "cors"
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})); 


const internData = {
  name: "Your Name",
  referralCode: "yourname2025",
  donationsRaised: 15000,
};


const leaderboardData = [
    { name: "Alex Doe", donationsRaised: 25000 },
    { name: "Your Name", donationsRaised: 15000 },
    { name: "Jane Smith", donationsRaised: 12000 },
    { name: "Sam Wilson", donationsRaised: 9500 },
    { name: "Chris Lee", donationsRaised: 7200 },
];



app.get('/api/dashboard', (req, res) => {
  res.json(internData);
});


app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});