import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return item.category === "red wine" || item.category === "white wine";
  });
  return (
    <div>
      <Hero />
      <section id="wines" className="py-16 border-t mt-10">
        <h1 className="ml-10 text-xl font-thin uppercase">
          Our selection of Natural Wines
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center">
        <img
          className="sm:h-[150px] h-auto"
          src="https://friaviner.se/cdn/shop/files/Duva_med_druvor_version_1_1_900x.gif?v=1656928842"
          alt=""
        />
        <p className="mb-10 text-sm">Drink Responsibly!</p>
      </div>
    </div>
  );
};

export default Home;
