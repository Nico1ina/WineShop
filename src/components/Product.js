import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, description, category, title, price } = product;
  return (
    <div>
      <div className="h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex justify-center items-center bg-transparent text-primary hover:text-[#808080] w-12 h-12">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 flex justify-center items-center bg-transparent text-primary hover:text-[#808080] drop-shaow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-xs font-ultralight capitalize text-gray-500 mb-1">
          {category}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-natural mb-1 text-black hover:underline">
            {title}
          </h2>
        </Link>
        <div className="font-ultralight text-sm">{price} SEK</div>
      </div>
    </div>
  );
};

export default Product;
