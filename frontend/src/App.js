import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import SignIn from "./pages/signin/signIn";
import SignUp from "./pages/signup/signUp";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="auth/signup" element={<SignUp />} exact />
          <Route path="auth/signin" element={<SignIn />} exact />
        </Route>

        <Route path="/" element={<Home />} exact />
      </Routes>
    </>
  );
}

export default App;
