import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [marcas, setMarcas] = useState([]);
  const fetchProducts = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/marcas/?acf_format=standard`;
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
    <div className="navbar bg-bg px-3 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black z-50 mt-3 w-56 p-2 shadow space-y-3"
          >
            <li>
              <a href="/">Inicio</a>
            </li>

            <li>
              <a href="/motos">Tienda</a>
            </li>
            <hr className="my-4" />
            <span className="block text-xs pl-3   text-slate-700">Marcas</span>
            {marcas.map((marca) => (
              <li key={marca.id}>
                <a href={`/motos/${marca.slug}`}>{marca.name}</a>
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
          <li>
            <a href="/">Inicio</a>
          </li>

          <li>
            <a href="/motos">Tienda</a>
          </li>

          <li className="z-50">
            <details>
              <summary>Marcas</summary>
              <ul className="bg-transparent  rounded-t-none p-2 absolute -left-36 backdrop-blur-xl grid grid-cols-3 gap-2 w-[500px]">
                {marcas.map((marca) => (
                  <li key={marca.id}>
                    <a href={`/motos/${marca.slug}`}>
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
        <SearchBar />
      </div>
    </div>
  );
}
