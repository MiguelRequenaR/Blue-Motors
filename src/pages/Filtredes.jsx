import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

export default function ProductsFiltered() {
  const { marca } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/motos?acf_format=standard`;
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching products: ", error);
      setIsLoading(false); // Ensure loading state is updated even on error
    }
  };

  const classifyProductsByMarca = (marca) => {
    if (!marca) {
      console.error("Marca is not defined");
      return;
    }

    const filtered = products.filter((product) => {
      return product.acf && product.acf.marca && product.acf.marca === marca;
    });

    setFilteredProducts(filtered);
    console.log("Filtered Products:", filtered);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    classifyProductsByMarca(marca);
  }, [marca, products]);

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

          <span
            href="https://wa.me/+51958455485?text=Hola, quiero un modelo en especifico."
            className="text-gray-300 hover:text-white mb-8 inline-block"
          >
            Contactanos si deseas un modelo especial &gt;
          </span>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="500"
        >
          {filteredProducts &&
            filteredProducts.map((filteredProduct) => (
              <ProductCard
                key={filteredProduct.id}
                image={filteredProduct.acf.imagen_1}
                modelo={filteredProduct.acf.modelo}
                marca={filteredProduct.acf.marca.name}
                slug={filteredProduct.slug}
                link={`/moto/${filteredProduct.id}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
