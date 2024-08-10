import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

export default function ProductsFiltered() {
  const [products, setProducts] = useState([]);
  const { marca } = useParams();
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    fetchProducts();
  }, []);

  const productsByBrand = products.reduce((acc, product) => {
    if (product.acf && product.acf.marca && product.acf.marca.name === marca) {
      acc.push(product);
    }

    return acc;
  }, []);

  console.log(productsByBrand);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className=" py-12 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center pb-10"
            data-aos="zoom-in-up"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <div className="text-3xl font-bold text-white mb-2">
              Modelos Disponibles para {marca}
            </div>
            <a
              href="/motos"
              className="text-gray-300 hover:text-white mb-8 inline-block"
            >
              Explora todos los modelos &gt;
            </a>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-right"
            data-aos-delay="1500"
            data-aos-duration="500"
          >
            {productsByBrand.map((product) => (
              <ProductCard
                key={product.id}
                image={product.acf.imagen_principal}
                modelo={product.acf.modelo}
                marca={product.acf.marca.name}
                slug={product.slug}
                link={`/moto/${product.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
