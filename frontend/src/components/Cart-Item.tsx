import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

type CartItemProps = {
  item: any;
};

const CartItem = ({ item }: CartItemProps) => {
  const { product_id, name, price, quantity, photo } = item;
  return (
    <tr key={product_id}>
      <td>
        <Link to={`/product/${product_id}`} className="flex items-center gap-3">
          <div className=" w-12 h-12 rounded-full ">
            <img src={photo} alt={name} className="object-fill pt-2" />
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">₹ {price}</div>
          </div>
        </Link>
      </td>
      <td>{quantity}</td>
      <td>
        <button className="md:btn md:btn-circle md:btn-ghost">
          <FaPlus />
        </button>
        <button className="md:btn md:btn-circle md:btn-ghost">
          <FaMinus />
        </button>
        <button className="md:btn md:btn-circle md:btn-ghost">
          <MdDelete size={20} />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
