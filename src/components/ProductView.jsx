import { PhoneIcon, ShareIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import HeroImage from "./../assets/portada.jpg";

import Carousel from "./product/Carousel";
import ContactForm from "./product/ContactForm";
import Specifications from "./product/Specifications";

export default function ProductView() {
  const [activeTab, setActiveTab] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const copyUrlBtnRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchProduct();
    }
  }, [id]);

  useEffect(() => {
    const handleCopyUrl = () => {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("URL copiada con éxito!");
        })
        .catch((err) => {
          console.error("Failed to copy URL: ", err);
        });
    };

    const copyUrlBtn = copyUrlBtnRef.current;
    if (copyUrlBtn) {
      copyUrlBtn.addEventListener("click", handleCopyUrl);
      return () => {
        copyUrlBtn.removeEventListener("click", handleCopyUrl);
      };
    }
  }, []);

  async function fetchProduct() {
    try {
      const productUrl = `${
        import.meta.env.VITE_API_URL
      }/motos/${id}?acf_format=standard`;
      const response = await fetch(productUrl);
      const data = await response.json();
      setProduct(data);
      setIsLoading(false);
      const availableColors = getAvailableColors(data.acf);
      if (availableColors.length > 0) {
        setSelectedColor(availableColors[0].url);
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  function getAvailableColors(acf) {
    return [
      { name: "Rojo", url: acf.rojo, hex: "#E74C3C" },
      { name: "Negro", url: acf.negro, hex: "#2C3E50" },
      { name: "Blanco", url: acf.blanco, hex: "#ECF0F1" },
      { name: "Verde", url: acf.verde, hex: "#2ECC71" },
      { name: "Amarillo", url: acf.amarillo, hex: "#F1C40F" },
      { name: "Naranja", url: acf.naranja, hex: "#E67E22" },
      { name: "Azul", url: acf.azul, hex: "#3498DB" },
    ].filter((color) => color.url);
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!product) return null;

  const colors = getAvailableColors(product.acf);

  return (
    <>
      <img src={product.acf.portada} className="mb-10 w-screen" />
      <div className="text-white py-10 max-w-6xl pt-20 mx-auto overflow-hidden flex lg:flex-row gap-16 flex-col-reverse">
        <div
          className="flex flex-col gap-4 w-full lg:w-1/3"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="500"
        >
          <div>
            {product.acf && (
              <div className="space-y-3 gap-2 text-sm mb-4 py-6 px-2 bg-light-bg border-t-4 border-b-4 border-border">
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-xs">
                    Marca:
                  </span>
                  {product.acf.marca.name}
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-xs">
                    Modelo:
                  </span>
                  {product.acf.modelo}
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-xs">
                    Cilindraje:
                  </span>
                  {product.acf.cilindraje}
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between text-end items-center">
                  <span className="text-gray-400 uppercase text-xs">
                    Motor:
                  </span>
                  {product.acf.motor}
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase text-xs">
                    Potencia:
                  </span>
                  {product.acf.potencia}
                </div>
              </div>
            )}
            <div className="mt-4 bg-light-bg">
              <a
                href="mailto:info@bluemotorsec.com"
                target="_blank"
                className="hover:bg-primary w-full text-white py-3 flex items-center gap-4 px-4 transition duration-300 ease-in-out rounded-xl"
              >
                <PhoneIcon className="h-6 w-6" />
                Reservar
              </a>
              <button
                ref={copyUrlBtnRef}
                className="hover:bg-primary w-full text-white py-3 flex items-center gap-4 px-4 transition duration-300 ease-in-out rounded-xl"
              >
                <ShareIcon className="h-6 w-6" />
                Compartir
              </button>
            </div>
          </div>
        </div>
        <div
          className="space-y-10 lg:w-[90vh]"
          data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="500"
        >
          {product.acf && (
            <div className="flex justify-between items-center lg:px-0 px-4">
              <div className="flex justify-items-start w-full flex-col ">
                <h4 className="text-gray-400 uppercase text-xs lg:text-sm font-semibold">
                  {product.acf.marca.name}
                </h4>
                <h1 className="lg:text-2xl text-xl font-bold">
                  {product.acf.modelo}
                </h1>
              </div>
              <a
                href="mailto:info@bluemotorsec.com"
                target="_blank"
                className="rounded-md flex justify-items-end py-2 flex-col px-5 text-right bg-primary w-fitlg:text-xl font-bold hover:opacity-80"
              >
                Contáctanos
              </a>
            </div>
          )}
          <hr className="border-gray-500" />

          {/* <Carousel images={colors.map((color) => color.url)} /> */}
          <div className="space-y-5 flex flex-col ">
            <span className="text-gray-400 uppercase text-xs pl-4 lg:pl-0">
              Colores disponibles
            </span>
            <div className="flex lg:w-full overflow-x-auto lg:overflow-x-hidden gap-2 pl-4 lg:pl-0">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.url)}
                  className={` w-6 h-6  rounded-full  ${
                    selectedColor === color.url ? "border-2 border-white" : ""
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
            <div className="flex justify-center my-4">
              {selectedColor && (
                <div className="lg:w-[800px] lg:h-[400px] mb-10">
                  <img
                    src={selectedColor}
                    alt="Imagen del producto"
                    className="object-contain w-full h-full mt-10 "
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex lg:w-full overflow-x-auto lg:overflow-x-hidden">
              <button
                onClick={() => handleTabClick("1")}
                className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${
                  activeTab === "1" ? "border-b-0 border-border" : ""
                }`}
              >
                Especificaciones
              </button>
              <button
                onClick={() => handleTabClick("2")}
                className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${
                  activeTab === "2" ? "border-b-0 border-border" : ""
                }`}
              >
                Galeria
              </button>
              <button
                onClick={() => handleTabClick("3")}
                className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${
                  activeTab === "3" ? "border-b-0 border-border" : ""
                }`}
              >
                Contáctanos
              </button>
            </div>
            <div className="p-4">
              {activeTab === "1" && product.acf && (
                <Specifications
                  marca={product.acf.marca.name}
                  modelo={product.acf.modelo}
                  cilindraje={product.acf.cilindraje}
                  motor={product.acf.motor}
                  potencia={product.acf.potencia}
                  chasis={product.acf.chasis}
                />
              )}
              {activeTab === "2" && product.acf && (
                <Carousel
                  images={colors.map((color) => color.url)}
                  id={product.id}
                />
              )}
              {activeTab === "3" && <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
