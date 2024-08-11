import PropTypes from "prop-types";

const ProductCard = ({ image, slug, link, modelo, marca }) => (
  <a
    href={link}
    className="relative cursor-pointer overflow-hidden rounded-lg group h-100vh"
  >
    <img
      src={image}
      alt={slug}
      className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
      <span className="text-white text-sm mb-1">{marca}</span>
      <h3 className="text-white text-xl font-bold mb-2">{modelo}</h3>
      <span className="text-white font-black text-sm group-hover:underline">
        Ver Producto &gt;
      </span>
    </div>
  </a>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  marca: PropTypes.string.isRequired,
};

export default ProductCard;
