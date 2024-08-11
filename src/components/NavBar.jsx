import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { Bars2Icon } from "@heroicons/react/20/solid";

export default function NavBar({ isOpen, setIsOpen }) {
  const [marcas, setMarcas] = useState([]);
  const fetchProducts = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/marcas?acf_format=standard`;
      const response = await fetch(url);
      const data = await response.json();
      setMarcas(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

          <li className="z-50">
            <details>
              <summary>Marcas</summary>
              <ul className="bg-transparent  rounded-t-none p-2 absolute -left-36 backdrop-blur-2xl grid grid-cols-2 gap-4 w-[500px]">
                {marcas.map((marca) => (
                  <li key={marca.id} className="duration-300 ease-in-out">
                    <a href={`/motos/${marca.name}`}>
                      <div>{marca.name}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
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
