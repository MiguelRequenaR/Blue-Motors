import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductView from "./components/ProductView";
import ErrorPage from "./pages/Error";

export default function App() {

    useEffect(() => {
        Aos.init()
    }, []);

    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/producto" element={<Products />} />
                    <Route path="/producto/:id" element={<ProductView />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </MainLayout>
        </Router>
    )
}