import PropTypes from "prop-types";
import "animate.css";

export default function Specifications({
  marca,
  modelo,
  cilindraje,
  motor,
  potencia,
  chasis,
}) {
  return (
    <div className="space-y-2  animate__animated animate__fadeInUp">
      <h1 className="text-xl font-bold my-4">Generales</h1>
      <hr className="border-gray-700" />
      <div className="flex items-center justify-between">
        <span className="text-white/50 uppercase text-xs"> Modelo</span>
        <span className="font-bold"> {modelo}</span>
      </div>
      <hr className="border-gray-700" />
      <div className="flex items-center justify-between">
        <span className="text-white/50 uppercase text-xs"> Marca</span>
        <span className="font-bold"> {marca}</span>
      </div>

      <div className="pt-10">
        <h1 className="text-xl font-bold">Motor</h1>
      </div>
      <hr className="border-gray-700" />
      <div className="flex lg:items-center lg:justify-between gap-3 lg:gap-0 lg:flex-row flex-col">
        <span className="text-white/50 uppercase text-xs"> Motor</span>
        <span className="font-bold text-sm">{motor}</span>
      </div>
      <hr className="border-gray-700" />
      <div className="flex lg:items-center lg:justify-between gap-3 lg:gap-0 lg:flex-row flex-col">
        <span className="text-white/50 uppercase text-xs"> Cilindraje</span>
        <span className="font-bold text-sm">{cilindraje}</span>
      </div>
      <hr className="border-gray-700" />
      <div className="flex lg:items-center lg:justify-between gap-3 lg:gap-0 lg:flex-row flex-col">
        <span className="text-white/50 uppercase text-xs">Potencia</span>
        <span className="font-bold text-sm">{potencia}</span>
      </div>
      <hr className="border-gray-700" />
      <div className="flex lg:items-center lg:justify-between gap-3 lg:gap-0 lg:flex-row flex-col">
        <span className="text-white/50 uppercase text-xs">Chasis</span>
        <span className="font-bold text-sm">{chasis}</span>
      </div>
    </div>
  );
}

Specifications.propTypes = {
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  cilindraje: PropTypes.string.isRequired,
  motor: PropTypes.string.isRequired,
  potencia: PropTypes.string.isRequired,
  chasis: PropTypes.string.isRequired,
};
