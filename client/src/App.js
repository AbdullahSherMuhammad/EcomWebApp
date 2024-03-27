import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import dotenv from "dotenv";

function App() {
  dotenv.config();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/*" element={<PageNotFound />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
