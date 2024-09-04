import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductView from "./components/ProductView";
import ErrorPage from "./pages/Error";
import ProductsFiltered from "./pages/Filtered";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 300,
    });
  }, []);

  return (
    <Router>
      <MainLayout isOpen={isOpen} setIsOpen={setIsOpen}>
        <Routes>
          <Route
            path="/"
            element={<Home isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path="/motos" element={<Products />} />
          <Route path="/motos/:marca" element={<ProductsFiltered />} />
          <Route path="/moto/:id" element={<ProductView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
