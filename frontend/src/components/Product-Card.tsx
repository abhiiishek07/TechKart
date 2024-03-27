type ProductProps = {
  id: string;
  name: string;
  photo: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "abcdef";

const ProductCard = ({
  id,
  name,
  photo,
  price,
  stock,
  handler,
}: ProductProps) => {
  return (
    <div className="card card-compact w-[18rem] bg-base-100 shadow-xl border mx-auto">
      <figure>
        <img src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">₹ {price}</p>
        <div className="card-actions justify-end">
          {stock > 0 ? (
            <button className="btn btn-primary" onClick={() => handler()}>
              Add to cart
            </button>
          ) : (
            <button className="btn btn-disabled">Out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
