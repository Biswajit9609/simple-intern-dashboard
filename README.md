
# 💻 Intern Portal – Full Stack Dashboard

A simple full stack intern dashboard built using **React** for frontend and **Node.js + Express** for backend. This project is designed for Round 1 Task of the internship challenge.

## ✨ Features

### 🔐 Frontend (React)
- Dummy Login/Signup page (no authentication)
- Intern Dashboard displaying:
  - Intern Name
  - Referral Code (`yourname2025`)
  - Total Donations Raised (fetched from backend)
  - Static Rewards/Unlockables section
- Leaderboard page (Optional Bonus)

### ⚙️ Backend (Node.js + Express)
- REST API with the following endpoint:
  - `GET /api/dashboard`: returns dummy data:
    ```json
    {
      "name": "Biswajit Chatterjee",
      "referralCode": "biswajit2025",
      "donationsRaised": 1500
    }
    ```

  - `GET /api/leaderboard`: returns dummy data:
    ```json
    {
      {
        "name": "Alex Doe",
        "donationsRaised": 25000
      },
      {
        "name": "Your Name",
        "donationsRaised": 15000
      },
      {
        "name": "Jane Smith",
        "donationsRaised": 12000
      },
      {
        "name": "Sam Wilson",
        "donationsRaised": 9500
      },
      {
        "name": "Chris Lee",
        "donationsRaised": 7200
      }
    }
    ```

## 📁 Folder Structure

```
intern-portal/
├── server/
│   ├── index.js
│   └── package.json
├── client/
│   ├── public/
│   ├── src/
│   └── package.json
├── README.md
```

## 🚀 Live Demo

> [Frontend Live Link](https://simple-intern-dashboard-omega.vercel.app/)  
> [Backend Live Link](https://simple-intern-dashboard.onrender.com)


---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Biswajit9609/simple-intern-dashboard
cd intern-portal
```

---

### 2. Run Backend

```bash
cd backend
npm install
node index.js
```

Backend runs on [http://localhost:5000](http://localhost:5000)

---

### 3. Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on [http://localhost:5173](http://localhost:5173)


## 📦 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Deployment**: Netlify/Vercel (frontend), Render/Railway (backend)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
