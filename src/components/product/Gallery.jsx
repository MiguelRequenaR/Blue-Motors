import PropTypes from "prop-types";
import "animate.css";

export default function Gallery({ images }) {
  return (
    <div className="space-y-5 animate__animated animate__fadeInUp">
      <h1 className="text-xl font-bold my-4">Galeria de imágenes</h1>
      <hr className="border-gray-700" />
      <div className="space-y-5 ">
        {images.map((image, index) => (
          <img src={image} key={index} className="w-2/3 rounded-lg" />
        ))}
      </div>
    </div>
  );
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
