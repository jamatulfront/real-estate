import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
import SignIn from "./pages/signin/signIn";
import SignUp from "./pages/signup/signUp";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import ProfileUpdate from "./pages/profileUpdate/profileUpdate";
import AddProperty from "./pages/addProperty/addProperty";
import NewHomes from "./pages/newHomes/newHomes";
import PropertyDetails from "./pages/propertyDetails/propertyDetails";
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
          <Route path="/addProperty" element={<AddProperty />} exact />
        </Route>

        <Route path="/" element={<Home />} exact />
        <Route path="/newHomes" element={<NewHomes />} exact />
        <Route
          path="/property/:propertyId"
          element={<PropertyDetails />}
          exact
        />
      </Routes>
    </>
  );
}

export default App;
