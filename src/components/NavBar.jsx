import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { ArrowPathIcon, Bars2Icon } from "@heroicons/react/20/solid";
import Loading from "./Loading";

export default function NavBar({ isOpen, setIsOpen }) {
  const [marcas, setMarcas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const url = `${import.meta.env.VITE_API_URL}/marcas?acf_format=standard`;
      const response = await fetch(url);
      const data = await response.json();
      setMarcas(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
    setIsLoading(false);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://bluemotorsec.com/wp-json/wp/v2/motos?_fields=id,acf&acf_format=standard"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const productsByBrand = products.reduce((acc, item) => {
    const brand = item.acf.marca.name;
    if (!acc[brand]) {
      acc[brand] = [];
    }
    acc[brand].push(item);
    return acc;
  }, {});

  const top10ProductsByBrand = Object.keys(productsByBrand).reduce(
    (acc, brand) => {
      acc[brand] = productsByBrand[brand]
        .sort((a, b) => b.acf.someMetric - a.acf.someMetric) // Replace 'someMetric' with the actual metric to sort by
        .slice(0, 10);
      return acc;
    },
    {}
  );

  return (
    <div className="navbar bg-bg px-3 lg:px-10">
      <div className="navbar-start flex lg:justify-start justify-between">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <Bars2Icon className="h-6 w-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black z-50 mt-3 w-[40dvh] p-2 shadow space-y-3"
          >
            <li className="duration-300 ease-in-out">
              <a href="/">Inicio</a>
            </li>

            <li className="duration-300 ease-in-out">
              <a href="/motos">Tienda</a>
            </li>
            <hr className="my-4" />
            <span className="block text-xs pl-3   text-slate-700">Marcas</span>
            {marcas.map((marca) => (
              <li key={marca.id} className="duration-300 ease-in-out">
                <a href={`/motos/${marca.name}`}>{marca.name}</a>
              </li>
            ))}
            {Object.keys(top10ProductsByBrand).map((brand) => (
              <div key={brand}>
                <h2>{brand}</h2>
                <ul>
                  {top10ProductsByBrand[brand].map((product, index) => (
                    <li key={index}>{product.acf.modelo}</li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
        <a href="/">
          <img src={logo} alt="logo" className="w-24 h-10 sm:w-32 sm:h-14" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li className="duration-300 ease-in-out">
            <a href="/">Inicio</a>
          </li>

          <li className="duration-300 ease-in-out">
            <a href="/motos">Tienda</a>
          </li>
          <div className="dropdown  !static">
            <li tabIndex={0} className="mt-2 " role="button">
              Marcas
            </li>

            <div
              className=" dropdown-content widthScroll  z-50  start-auto
                  backdrop-blur-md bg-transparent flex justify-center w-screen absolute  top-20 -right-[0px] border-gray-200 :py-[15px]:pl-[20px] "
            >
              {isLoading && (
                <div className="absolute -top-4 right-0 z-50 w-screen h-20 bg-black/50 flex justify-center items-center">
                  <ArrowPathIcon className="w-8 h-8 animate-spin" />
                  Cargando Marcas...
                </div>
              )}
              {!isLoading &&
                Object.keys(productsByBrand).map((brand) => (
                  <div
                    className="flex justify-start flex-col space-y-3 mt-[20px] p-4 gap-y-[20px]
                      "
                    key={brand}
                  >
                    <h2 className=" font-bold">{brand}</h2>
                    {productsByBrand[brand].map((item, index) => (
                      <a
                        href={`/moto/${item.id}`}
                        className=" w-[250px] relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]"
                        key={index}
                      >
                        {item.acf.modelo}
                      </a>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </ul>
      </div>
      <div className="navbar-end">
        <SearchBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
