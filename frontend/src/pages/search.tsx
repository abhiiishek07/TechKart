import { useState } from "react";
import ProductCard from "../components/Product-Card";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(100000);
  const [page, setPage] = useState<number>(1);
  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  const handleAddToCart = () => {};

  return (
    <div className="w-full h-full">
      <div className="max-w-7xl h-full flex flex-col md:flex-row mx-auto my-10 gap-4">
        {/* filters */}
        <div className="w-full max-w-xs mx-auto h-full border shadow-md flex flex-col p-4 rounded-md md:sticky md:top-28 ">
          <h3 className="font-bold text-xl">FILTERS</h3>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select
              className="select select-bordered"
              value={sort || ""}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">None</option>
              <option value="asc">Price ( low to high )</option>
              <option value="dsc">Price ( high to low )</option>
            </select>
          </label>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Max price: {maxPrice}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="range range-accent range-xs"
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              className="select select-bordered"
              value={category || ""}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="asc">Camera</option>
              <option value="dsc">Laptop</option>
              <option value="dsc">Mobile</option>
            </select>
          </label>
        </div>

        {/* products */}
        <div className="flex flex-col  w-full px-4 gap-4">
          <h1 className="font-bold text-3xl uppercase text-center">Products</h1>
          <div className="w-full">
            <label className="input input-bordered max-w-xs mx-auto flex items-center gap-2 justify-center">
              <input
                type="text"
                className="grow"
                placeholder="Search a product..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="my-5 flex flex-col md:flex-row flex-wrap gap-3 w-full ">
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
            <ProductCard
              id="1234ac"
              name="Macbook"
              price={99000}
              stock={0}
              handler={handleAddToCart}
              photo="https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg"
            />
          </div>
          <div className="flex items-center mx-auto gap-4">
            <button
              className="btn btn-accent text-white"
              onClick={() => setPage((prev) => prev - 1)}
              disabled={!isPrevPage}
            >
              prev
            </button>
            <p>page {page} of 4</p>
            <button
              className="btn btn-accent text-white"
              onClick={() => setPage((prev) => prev + 1)}
              disabled={!isNextPage}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
