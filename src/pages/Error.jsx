import { ArrowLongLeftIcon } from "@heroicons/react/16/solid";
import NothingImage from "../assets/404.png";
export default function ErrorPage() {
  return (
    <div className=" flex  flex-col  items-center justify-center  text-center ">
      <img src={NothingImage} alt="error" className="lg:w-1/4" />
      <h1 className="text-black font-bold text-2xl">
        404 - Página no encontrada
      </h1>
      <p className="text-gray-500">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <a href="/" className="btn mt-5 hover:text-white">
        <ArrowLongLeftIcon className="w-5 h-5" />
        Volver a la página principal
      </a>
    </div>
  );
}
