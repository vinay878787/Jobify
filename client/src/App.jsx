import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import NavBar from "../Components/NavBar";
import Error from "../Pages/Error";
import Logout from "../Pages/Logout";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
