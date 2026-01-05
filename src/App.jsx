import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/shop/:id" element={<ProductDetail />} />
      </Routes>


      <Footer />
    </>
  );
}

export default App;





