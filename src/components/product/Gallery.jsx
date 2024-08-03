import PropTypes from 'prop-types';

export default function Gallery({images}) {
    return (
        <div className="space-y-5">
            <h1 className="text-xl font-bold my-4">Galeria de imágenes</h1>
            <hr className="border-gray-700" />
            <div className="grid lg:grid-cols-2 lg:gap-12 grid-cols-1 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={image} className="w-full rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    )
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};