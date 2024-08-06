import Footer from "../components/Footer";
import Products from "./Products";
import HeroImage from "./../assets/portada.jpg";

export default function Home() {
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
          className="space-y-16 mb-64"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <h1 className="text-white text-3xl font-bold lg:text-[50px] lg:w-2/3 mx-auto">
            ¡Siente el rugido, vive la pasión de las motos!
          </h1>

          <div>
            <button className="animate__animated animate__fadeInLeft bg-bg rounded-xl py-4 px-8 text-white text-center text-[20px] hover:opacity-90">
              <a href="/motos">
                <p>Explora la nueva colección</p>
              </a>
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
        <div className="relative rounded-lg overflow-hidden w-full m-2 lg:max-w-[70%] max-h-96">
          <img
            src={HeroImage}
            alt="motorcycle"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center p-4 md:p-6">
              <h1 className="text-white text-xl md:text-3xl font-bold mb-2">
                Siente el rugido
              </h1>
              <p className="text-white text-sm md:text-lg font-bold">
                Vive la pasión por las motos
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
