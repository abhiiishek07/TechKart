import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";
import gadjets_img from "../assets/images/gadjets.png";
import Lottie from "lottie-react";
import GadjetAnimation from "../assets/lottie/gadjets_animation.json";

const Home = () => {
  const handleAddToCart = () => {};
  return (
    <div className="w-full h-full p-3">
      <div className="w-full max-w-6xl mx-auto mt-12 lg:mt-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col  max-w-xl">
            {" "}
            <h1 className="text-2xl md:text-5xl font-bold ">
              Get All The Latest Gadgets Tailored For Your Special Needs
            </h1>
            <p className="text-sm md:text-xl text-gray-500 mt-4">
              Explore a wide range of cutting-edge gadgets including
              smartphones, earphones, laptops, and more. We carefully select our
              products to meet your specific requirements and offer the latest
              technology at competitive prices.
            </p>
          </div>
          <Lottie animationData={GadjetAnimation} className="max-w-md" />
        </div>

        <div className="w-full mt-3">
          <img
            src={gadjets_img}
            alt="laptop"
            className="w-full h-44 md:h-[28rem] rounded-md border shadow-sm"
          />
        </div>
        <div className="flex justify-between mt-12">
          <div className="flex items-center gap-3">
            {" "}
            <h1 className="font-bold text-xl">LATEST PRODUCTS </h1>
            <FaBox size={22} />
          </div>
          <Link to="/search" className="btn btn-ghost">
            More -&gt;
          </Link>
        </div>
        <div className="my-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <ProductCard
            id="1234ac"
            name="Macbook"
            price={99000}
            stock={10}
            handler={handleAddToCart}
            photo="https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg"
          />
          <ProductCard
            id="1234ac"
            name="Macbook"
            price={99000}
            stock={10}
            handler={handleAddToCart}
            photo="https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg"
          />
          <ProductCard
            id="1234ac"
            name="Macbook"
            price={99000}
            stock={0}
            handler={handleAddToCart}
            photo="https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

//
