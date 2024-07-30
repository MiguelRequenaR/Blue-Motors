import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://bluemotorsec.com/wp-json/wp/v2/motos?acf_format=standard");
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 pt-32 h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Compra por modelo de motocicleta</h2>
                    <a href="/" className="text-gray-300 hover:text-white mb-8 inline-block">
                        Explora todos los modelos &gt;
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id}
                            image={product.acf.imagen_1}
                            modelo={product.acf.modelo}
                            slug={product.slug}
                            link={`/producto/${product.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
