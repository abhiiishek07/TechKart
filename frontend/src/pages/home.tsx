import { FaBox } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductCard from "../components/Product-Card";

const Home = () => {
  const handleAddToCart = () => {};
  return (
    <div className="w-full h-full p-3">
      <div className="w-full max-w-6xl mx-auto mt-20">
        <div className="w-full">
          <img
            src="https://img.freepik.com/premium-photo/laptop-computer-black-color-place-table-with-dark-background-3d-illustration-rendering-image_37129-1714.jpg"
            alt="laptop"
            className="w-full h-96 rounded-md"
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
        <div className="my-5 flex justify-between">
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
