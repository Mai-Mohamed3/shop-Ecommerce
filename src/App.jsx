import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cards from "./Pages/Cards";
import Login from "./Pages/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Cards" element={<Cards />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
