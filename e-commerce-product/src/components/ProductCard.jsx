const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-600 mt-1">₹{product.price}</p>
        <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg
                     hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
