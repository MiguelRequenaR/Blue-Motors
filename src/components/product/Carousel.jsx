import PropTypes from 'prop-types';

export default function Carousel({ images }) {
    return (
        <div className="carousel w-full">
            {images.map((image, index) => (
                <div key={index} id={`slide${index + 1}`} className="carousel-item relative w-full">
                    <img src={image} className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href={`#slide${index === 0 ? images.length : index}`} className="btn btn-circle">❮</a>
                        <a href={`#slide${(index + 1) % images.length + 1}`} className="btn btn-circle">❯</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};