import PropTypes from "prop-types";
import "animate.css";
import { useRef } from "react";
export default function Carousel({ images }) {
  const carouselRef = useRef([]);
  const handleNavigation = (index) => {
    carouselRef.current[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="carousel w-full animate__animated animate__fadeInUp">
      {images.map((image, index) => (
        <div
          key={index}
          ref={(el) => (carouselRef.current[index] = el)}
          className="carousel-item relative flex justify-center w-full"
        >
          <div className="lg:w-[800px] lg:h-[400px] mb-10">
            <img
              src={image}
              alt="Imagen del producto"
              className="object-contain w-full h-full mt-10 px-10"
            />
          </div>

          <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={() =>
                handleNavigation(index === 0 ? images.length - 1 : index - 1)
              }
              className="btn btn-circle"
            >
              ❮
            </button>
            <button
              onClick={() => handleNavigation((index + 1) % images.length)}
              className="btn btn-circle"
            >
              ❯
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
