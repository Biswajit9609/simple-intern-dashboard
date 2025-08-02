import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LeaderBoard from "./pages/LeaderBoard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/DashBoard.jsx"

const router = createBrowserRouter([
  { path: "/leaderboard", element: <LeaderBoard /> },
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <Signup /> },
  { path: "/dashboard", element: <Dashboard /> }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;