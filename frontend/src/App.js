import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import SignIn from "./pages/signin/signIn";
import SignUp from "./pages/signup/signUp";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import ProfileUpdate from "./pages/profileUpdate/profileUpdate";
function App() {
  return (
    <>
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="auth/signup" element={<SignUp />} exact />
          <Route path="auth/signin" element={<SignIn />} exact />
        </Route>
        <Route element={<LoggedInRoutes />}>
          <Route path="profile" element={<Profile />} exact />
          <Route path="profile/update" element={<ProfileUpdate />} exact />
        </Route>

        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}

export default App;
