import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/motos?acf_format=standard`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center pb-10"
          data-aos="zoom-in-up"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div className="text-3xl font-bold text-white mb-2">
            Explora los modelos de motocicletas que tenemos
          </div>
          <a
            href="/motos"
            className="text-gray-300 hover:text-white mb-8 inline-block"
          >
            Contactanos si deseas un modelo especial &gt;
          </a>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="500"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.acf.imagen_1}
              modelo={product.acf.modelo}
              marca={product.acf.marca.name}
              slug={product.slug}
              link={`/producto/${product.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
