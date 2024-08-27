import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 12;

  const fetchProducts = async (page) => {
    try {
      const url = `${
        import.meta.env.VITE_API_URL
      }/motos?acf_format=standard&per_page=${productsPerPage}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      const total = response.headers.get("X-WP-Total");
      setProducts(data);
      setTotalProducts(total);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 pt-32">
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
            href="mailto:info@bluemotorsec.com"
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
              image={product.acf.imagen_principal}
              modelo={product.acf.modelo}
              marca={product.acf.marca.name}
              slug={product.slug}
              link={`/moto/${product.id}`}
            />
          ))}
        </div>
        <div className="flex justify-center items-center mt-16 text-white">
          <div className="flex items-center gap-4">
            <button
              className="btn btn-circle"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <ChevronLeftIcon />
            </button>
            <button>
              Página {currentPage} de {totalPages}
            </button>
            <button
              className="btn btn-circle"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
