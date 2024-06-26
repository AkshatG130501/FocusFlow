import { Route, Routes } from "react-router-dom";

import TimerNavbar from "./components/TimerNavbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import CreatorProfile from "./pages/CreatorProfile";
import NavBar from "./components/NavBar";
import StudentVideosBrowse from "./pages/StudentVideosBrowse";
import VideoPage from "./pages/VideoPage";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;
function App() {
  return (
    // <TimerNavbar/>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/timer" element={<TimerNavbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creator/profile" element={<CreatorProfile />} />
        <Route
          path="/student/videoBrowse/:keywords/:taskId"
          element={<StudentVideosBrowse />}
        />
        <Route path="/video/:taskId/:videoId" element={<VideoPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
