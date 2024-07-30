

const ProductCard = ({ image, slug, link, modelo }) => (
    <div className="relative overflow-hidden rounded-lg group h-100vh">
        <img src={image} alt={slug} className="w-full h-64 object-cover transition duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
            <p className="text-white text-sm mb-1">{slug}</p>
            <h3 className="text-white text-xl font-bold mb-2">{modelo}</h3>
            <a href={link} className="text-white font-black text-sm hover:underline">
                Ver Producto &gt;
            </a>
        </div>
    </div>
);

export default ProductCard;

