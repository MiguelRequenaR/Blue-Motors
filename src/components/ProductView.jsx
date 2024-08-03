import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { PhoneIcon, ShareIcon } from "@heroicons/react/20/solid";
import Overview from "./product/Overview";
import Specifications from "./product/Specifications";
import Gallery from "./product/Gallery";
import ContactForm from "./product/ContactForm";
import Carousel from "./product/Carousel";
import Loading from "./Loading";


export default function ProductView() {

    const [activeTab, setActiveTab] = useState("1");
    const copyUrlBtnRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [product, setProduct] = useState({});
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
            const productUrl = `${import.meta.env.VITE_API_URL}/${id}?acf_format=standard`;
            const response = await fetch(productUrl);
            const data = await response.json();
            setProduct(data);
            setIsLoading(false);
            console.log(data);
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    }

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    if (isLoading) {
        return <Loading />;
    }

    if (!product) return null;

    const images = product.acf ? [
        product.acf.imagen_1,
        product.acf.imagen_2,
        product.acf.imagen_3,
    ] : [];


    return (
        <div className="text-white p-10 max-w-5xl pt-20 mx-auto overflow-hidden flex lg:flex-row gap-16 flex-col-reverse">
            <div
                className="flex flex-col gap-4 md:w-1/3"
                data-aos='fade-right'
                data-aos-delay='1000'
                data-aos-duration='500'
            >
                <div>
                    {product.acf && (
                        <div className="space-y-3 gap-2 text-sm mb-4 p-6 bg-light-bg border-t-4 border-b-4 border-border">
                            <div className="flex justify-between">
                                <span className="text-gray-400 uppercase text-xs">Marca:</span>
                                {product.acf.marca.name}
                            </div>
                            <hr className="border-gray-700" />
                            <div className="flex justify-between">
                                <span className="text-gray-400 uppercase text-xs">Modelo:</span>
                                {product.acf.modelo}
                            </div>
                            <hr className="border-gray-700" />
                            <div className="flex justify-between">
                                <span className="text-gray-400 uppercase text-xs">Cilindraje:</span>
                                {product.acf.cilindraje}
                            </div>
                            <hr className="border-gray-700" />
                            <div className="flex justify-between">
                                <span className="text-gray-400 uppercase text-xs">Motor:</span>
                                {product.acf.motor}
                            </div>
                            <hr className="border-gray-700" />
                            <div className="flex justify-between">
                                <span className="text-gray-400 uppercase text-xs">Potencia:</span>
                                {product.acf.potencia}
                            </div>
                        </div>
                    )}
                    <div className="mt-4 bg-light-bg">
                        <a
                            href="https://wa.me/+51958455485?text=Hola, quiero reservar un coche motorizado"
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
                data-aos='fade-left'
                data-aos-delay='1000'
                data-aos-duration='500'
            >
                {product.acf && (
                    <div className="flex justify-between items-center lg:px-0 px-4">
                        <div className="flex justify-items-start flex-col md:w-1/2">
                            <h4 className="text-gray-400 uppercase text-xs  lg:text-sm font-semibold">
                                {product.acf.marca.name}
                            </h4>
                            <h1 className="lg:text-3xl text-xl font-bold">
                                {product.acf.modelo}
                            </h1>
                        </div>
                        <div className="rounded-md flex justify-items-end py-2 flex-col px-5 text-right bg-primary w-fit">
                            <h5 className="text-white/60 lg:text-sm text-xs">Chasis</h5>
                            <h1 className="lg: text-xl font-bold">
                                {product.acf.chasis}
                            </h1>
                        </div>
                    </div>
                )}
                <hr className="border-gray-500" />

                <div>
                    <Carousel images={images} />
                </div>

                <div className="flex flex-col">
                    <div className="flex lg:w-full overflow-x-auto lg:overflow-x-hidden">
                        <button
                            onClick={() => handleTabClick("1")}
                            className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${activeTab === "1" ? "border-b-0 border-border" : ""}`}
                        >
                            Vista General
                        </button>
                        <button
                            onClick={() => handleTabClick("2")}
                            className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${activeTab === "2" ? "border-b-0 border-border" : ""}`}
                        >
                            Especificaciones
                        </button>
                        <button
                            onClick={() => handleTabClick("3")}
                            className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${activeTab === "3" ? "border-b-0 border-border" : ""}`}
                        >
                            Galeria
                        </button>
                        <button
                            onClick={() => handleTabClick("4")}
                            className={`p-4 focus:bg-light-bg focus:border-t-2 focus:border-t-primary uppercase text-xs w-full font-bold min-w-36 focus:border-border focus:bg-bg bg-primary flex justify-center items-center ${activeTab === "4" ? "border-b-0 border-border" : ""}`}
                        >
                            Contáctanos
                        </button>
                    </div>
                    <div className="p-4">
                        {activeTab === "1" && product.acf && <Overview colores={product.acf.colores} />}
                        {activeTab === "2" && product.acf &&
                            <Specifications 
                                marca={product.acf.marca.name}
                                modelo={product.acf.modelo}
                                cilindraje={product.acf.cilindraje}
                                motor={product.acf.motor}
                                potencia={product.acf.potencia}
                                chasis={product.acf.chasis}
                            />}
                        {activeTab === "3" && product.acf  && <Gallery images={images} />}
                        {activeTab === "4" && <ContactForm />}
                    </div>
                </div>
            </div>
        </div>
    )
}
