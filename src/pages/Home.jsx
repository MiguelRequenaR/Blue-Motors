import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Footer from "../components/Footer";
import HeroImage from "./../assets/hero.jpg";
import StoreImage from "./../assets/local1.png";

import Products from "./Products";
import PropTypes from "prop-types";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
export default function Home({ setIsOpen }) {
  return (
    <>
      <div
        className="h-screen overflow-hidden flex flex-col justify-center items-center p-10 animate__animated animate__fadeInLeft text-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          className="space-y-10 mb-64"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <h4 className="text-white  font-bold   mx-auto">
            <GlobeAltIcon className="inline-block w-4 h-4 mr-2" />
            Live To Ride
          </h4>
          <h1 className="text-white text-3xl font-bold lg:text-[50px]  mx-auto">
            ¡Muévete en moto!
          </h1>

          <div>
            <button
              onClick={() => setIsOpen(true)}
              className="hover:bg-primary transition duration-300 ease-in-out animate__animated animate__fadeInLeft bg-bg rounded-xl py-4 px-8 text-white text-center text-[20px] hover:opacity-90"
            >
              <p>
                Buscar una moto
                <ArrowLongRightIcon className="inline-block w-4 h-4 ml-2" />
              </p>
            </button>
          </div>
        </div>
      </div>

      <Products />

      <div
        className="flex justify-center items-center mt-20"
        data-aos="flip-left"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <div className="relative lg:rounded-lg overflow-hidden w-full lg:max-w-[70%] max-h-96">
          <img
            src={StoreImage}
            alt="motorcycle"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-4 md:p-6">
              <h1 className="text-white text-xl md:text-3xl font-bold mb-2">
                ¿Dónde nos puedes encontrar?
              </h1>
              <p className="text-white text-sm md:text-lg font-bold hidden lg:block">
                2 sucursales en el Valle de los Chillos – Quito – Ecuador.
              </p>
              <p className="text-white text-sm mt-24">
                MATRIZ: Centro Comercial RIVER MALL, Subsuelo 2 - Local 2
              </p>
              <p className="text-white text-sm mt-4">
                SUCURSAL: Av. San Juan De Dios y Rio Zamora S/N. PLAZA MAKENA -
                SAN RAFAEL.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

Home.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
