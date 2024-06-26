import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-extralight">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4">
        <div className=" flex w-full justify-between items-center">
          <div></div>
          <div className="uppercase font-ultralight">
            <span className="mr-2">Total:</span> {parseFloat(total).toFixed(2)}{" "}
            SEK
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 text-primary w-12 h-12 flex justify-center items-center text-xl hover:text-[#808080]"
          >
            <FiTrash2 />
          </div>
          <div className="flex flex-col gap-y-1 mr-10">
            <Link
              to="/"
              className="underline flex justify-center items-center text-primary font-ultralight hover:no-underline text-sm"
            >
              View cart
            </Link>
            <p className="text-xs flex justify-center items-center font-thin">
              OR
            </p>
            <Link
              to="/"
              className="underline flex justify-center items-center text-primary font-ultralight hover:no-underline text-sm"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
