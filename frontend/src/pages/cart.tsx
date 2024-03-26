import { useEffect, useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/Cart-Item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    product_id: "1234ac",
    name: "Macbook",
    price: 90000,
    stock: 10,
    quantity: 4,
    photo: "https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg",
  },
  {
    product_id: "1234ac",
    name: "Macbook",
    price: 90000,
    stock: 10,
    quantity: 4,
    photo: "https://m.media-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg",
  },
];

const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 0;
const total = subTotal + tax + shippingCharges - discount;
const validCouponCode = "NEWUSER";

const order_value = [
  {
    title: "Sub Total",
    value: subTotal,
  },
  {
    title: "Shipping Charges",
    value: shippingCharges,
  },
  {
    title: "tax",
    value: tax,
  },
  {
    title: "Discount",
    value: discount,
    isDiscount: true,
  },
];

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeValid, setIsCouponCodeValid] = useState<boolean>(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if (couponCode === validCouponCode) setIsCouponCodeValid(true);
      else setIsCouponCodeValid(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsCouponCodeValid(false);
    };
  }, [couponCode]);

  return (
    <div className="w-full h-full p-3">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row mx-auto justify-between p-4 gap-4">
        <div className="overflow-x-auto w-full max-w-5xl border rounded-md h-fit">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-md w-full border p-5 rounded-md gap-1 flex flex-col h-fit  top-20 sticky">
          {order_value.map((item, index) => (
            <div className="flex items-center gap-4" key={index}>
              <p className="text-lg font-semibold">{item.title}</p>
              <p
                className={`text-lg text-gray-500 ${
                  item.isDiscount && "text-red-500"
                } `}
              >
                ₹ {item.value}
              </p>
            </div>
          ))}

          <label className="input input-bordered flex items-center gap-2">
            <TbDiscount2 size={20} />
            <input
              type="text"
              className="grow"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </label>
          {couponCode &&
            (isCouponCodeValid ? (
              <span className="text-green-500">
                ₹ {discount} off using the coupon <code>{couponCode}</code>
              </span>
            ) : (
              <span className="text-red-500 flex items-center gap-3">
                Invalid coupon <VscError size={20} />
              </span>
            ))}
          <div className="divider  m-0"></div>
          <div className="flex items-center gap-4">
            <p className="text-lg font-bold">Total:</p>
            <p className="text-lg text-gray-500 font-semibold">₹ {total}</p>
          </div>
          <Link to="/shipping" className="btn btn-primary text-lg">
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
