// import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ResetForm } from "./pages/resetPage";
import { LoginForm } from "./pages/userLogin";
import { SignupForm } from "./pages/userSignup";
// import "./responsive.css";
function App() {
  return (
    // <div className="wrapper dashboard" id="dashboard">
    //   <div className="main-container"></div>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/reset-password" element={<ResetForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
