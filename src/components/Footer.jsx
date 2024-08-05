import logo from "../assets/logo.jpeg";

export default function Footer() {
  return (
    <div className="bg-bg">
      <div
        className="mt-20 grid lg:grid-cols-3 gap-10 p-10"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div className="bg-primary p-10 rounded-lg">
          <h1 className="text-white font-bold text-2xl">Acerca de nosotros</h1>
          <p className="text-white text-base mt-5">
            Empresa lider en venta de motocicletas y motos de alta gama, con una
            amplia variedad de modelos y diseños.
          </p>
        </div>
        <div className="p-10">
          <h1 className="text-white font-bold text-2xl">Enlaces</h1>
          <ul className="text-white text-base mt-5 space-y-5 b">
            <li>
              <a href="/" className="border-b-2 border-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="/motos" className="border-b-2 border-white">
                Tienda
              </a>
            </li>
          </ul>
        </div>
        <div className=" p-10">
          <h1 className="text-white font-bold text-2xl">Siguenos</h1>
          <div className="flex flex-col space-y-3 mt-5 text-white">
            <div className="flex items-center gap-4">
              <img
                src="https://img.icons8.com/?size=48&id=118497&format=png"
                alt="Facebook"
                className="w-6 h-6 "
              />
              <a href="https://www.facebook.com/bluemotors.es/">Facebook</a>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png"
                alt="Instagram"
                className="w-6 h-6"
              />
              <a href="https://www.instagram.com/bluemotors.es/">Instagram</a>
            </div>
            <div className="flex items-center gap-5">
              <img
                src="https://img.icons8.com/?size=48&id=13963&format=png"
                alt="Twitter"
                className="w-6 h-6"
              />
              <a href="https://twitter.com/bluemotors_es">Twitter</a>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 w-[90%] mx-auto" />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-around items-center mt-10 space-y-4 sm:space-y-0 pb-5">
        <img src={logo} alt="Logo" className="w-24 h-10 sm:w-32 sm:h-14" />
        <p className="text-center sm:text-left text-sm sm:text-base">
          © 2024 BlueMotors. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
}
