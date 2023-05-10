import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home_page from "./pages/Home_page";
import Project_page from "./pages/Project_page";
import About_page from "./pages/About_page";
import Contact_page from "./pages/Contact_page";

function App() {
  return (
    <div className="bg-[#282C33]">
      <Navbar />
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<Home_page />} />
        <Route path="/projects" element={<Project_page />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
