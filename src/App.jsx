import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductView from "./components/ProductView";
import ErrorPage from "./pages/Error";
// import ProductsFiltered from "./pages/Filtredes";

export default function App() {
  useEffect(() => {
    Aos.init({
      offset: 50,
      duration: 300,
    });
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/motos" element={<Products />} />
          {/* <Route path="/motos/:marca" element={<ProductsFiltered />} /> */}
          <Route path="/moto/:id" element={<ProductView />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
