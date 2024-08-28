import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export default function NavBar({ isOpen, setIsOpen }) {

  const [marcas, setMarcas] = useState([]);
  const [productosClasificados, setProductosClasificados] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Función para obtener las marcas
  const fetchMarcas = async () => {
    try {
      const response = await fetch("https://bluemotorsec.com/wp-json/wp/v2/marcas/");
      const data = await response.json();

      const marcasArray = data.map((marca) => ({
        id: marca.id,
        name: marca.name,
      }));

      setMarcas(marcasArray);
    } catch (error) {
      console.error("Error fetching marcas:", error);
    }
  };

  // Función para obtener productos por marca
  const fetchProductosPorMarca = async (marcaId) => {
    try {
      const response = await fetch(`https://bluemotorsec.com/wp-json/wp/v2/motos?marcas=${marcaId}`);
      const data = await response.json();

      const productos = data
        .filter((producto) => producto.acf && producto.acf.modelo)
        .map((producto) => ({
          id: producto.id,
          modelo: producto.acf.modelo,
        }));

      return productos;
    } catch (error) {
      console.error(`Error fetching productos for marca ${marcaId}:`, error);
      return [];
    }
  };

  // Función para clasificar los productos por marca y actualizar el estado
  const clasificarProductosPorMarca = async () => {
    try {
      for (const marca of marcas) {
        const productos = await fetchProductosPorMarca(marca.id);

        if (productos.length > 0) {
          // Usamos la función de actualización de estado para evitar sobrescritura
          setProductosClasificados((prevState) => ({
            ...prevState,
            [marca.name]: productos,
          }));
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error clasificando productos:", error);
    }
  };

  // useEffect para obtener las marcas al montar el componente
  useEffect(() => {
    fetchMarcas();
  }, []);

  // useEffect para clasificar productos cuando las marcas están disponibles
  useEffect(() => {
    if (marcas.length > 0) {
      clasificarProductosPorMarca();
    }
  }, [marcas]);
  return (
    <div className="navbar bg-bg px-3 lg:px-10">
      <div className="navbar-start flex lg:justify-start justify-between">
        <details className="dropdown">
          <summary className="btn m-1 btn-ghost lg:hidden">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </summary>
          <ul className="w-[97vw] *:*:py-5 menu  dropdown-content backdrop-blur-sm bg-black/65  z-50 mt-2 p-2 shadow space-y-5 -left-3">
            <li className="duration-300 ease-in-out ">
              <a href="/">Inicio</a>
            </li>
            <li className="duration-300 ease-in-out">
              <a href="/motos">Tienda</a>
            </li>
            <hr className="my-4" />
            <span className="block text-xs pl-3 text-center">Marcas</span>

            {!isLoading &&
        Object.keys(productosClasificados).map((brand) => (
          <details
            className="collapse flex justify-start flex-col"
            key={brand}
          >
            <summary className="hover:bg-white/10 collapse-title font-black">
              <p>{brand}</p>
            </summary>
            <ul className="collapse-content flex flex-col duration-300 ease-in-out">
              {productosClasificados[brand].map((item, index) => (
                <li key={index}>
                  <a
                    href={`/moto/${item.id}`}
                    className="py-6 w-full relative hover:text-primary
                            after:content-[''] after:bg-primary after:h-[0%] after:w-[3px] after:bottom-0 after:-left-[20px] after:rounded-x1 after:absolute after:duration-300
                            after:hover:h-[100%]"
                  >
                    
                    {item.modelo || 'Modelo no disponible'}
                  </a>
                  
                </li>
              ))}
            </ul>
          </details>
        ))}
          </ul>
        </details>

        <a href="/">
          <img src={logo} alt="logo" className="w-24 h-10 sm:w-32 sm:h-14" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex text-white">
        <ul className="flex justify-center items-end menu menu-horizontal px-1 space-x-5">
          <li className=" duration-300 ease-in-out">
            <a href="/">Inicio</a>
          </li>

          <li className="duration-300 ease-in-out">
            <a href="/motos">Tienda</a>
          </li>
          <li className="dropdown  !static">
            <div tabIndex={0} className="mt-2 ">
              Marcas
            </div>

            <div
              className="flex items-start dropdown-content widthScroll  z-50  start-auto
                  backdrop-blur-md bg-transparent justify-between grid grid-flow-row grid-cols-5  w-screen absolute  top-20 -right-0 border-gray-200 py-10 "
            >
              {isLoading && (
                <div className="absolute space-x-2   right-0 z-50 w-screen h-24 bg-black/50 flex justify-center items-center">
                  <ArrowPathIcon className="w-4 h-4 animate-spin" />
                  <span> Cargando Marcas...</span>
                </div>
              )}
              {!isLoading &&
                Object.keys(productosClasificados).map((brand) => (
                  <div
                    className="space-y-3 mt-5 p-4 gap-y-5 flex flex-col "
                    key={brand}
                  >
                    <h2 className="font-bold text-left">{brand}</h2>
                    <ul className="mt-5 py-2 text-left">
                      {productosClasificados[brand].map((item, index) => (
                        <li key={index}>
                          <a href={`/moto/${item.id}`} className="text-xs">
                          {item.modelo || 'Modelo no disponible'}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </li>
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
