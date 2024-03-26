import { ChangeEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShippingDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full h-full px-3">
      <div className="max-w-6xl mx-auto flex flex-col  justify-center items-center mt-10">
        <h1 className="text-2xl font-bold underline underline-offset-4">
          SHIPPING ADDRESS
        </h1>
        <form className="flex flex-col items-center max-w-lg w-full p-6 rounded-md my-7 gap-2 border">
          <input
            required
            type="text"
            placeholder="Address"
            name="address"
            value={shippingDetails.address}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md my-1"
          />
          <input
            required
            type="text"
            placeholder="City"
            name="city"
            value={shippingDetails.city}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md my-1"
          />
          <input
            required
            type="text"
            placeholder="State"
            name="state"
            value={shippingDetails.state}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md my-1"
          />
          <select
            className="select select-bordered w-full max-w-md"
            required
            name="country"
            value={shippingDetails.country || "Country"}
            onChange={handleChange}
          >
            <option disabled selected>
              Country
            </option>
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="england">England</option>
          </select>
          <input
            required
            type="number"
            placeholder="Pincode"
            name="pinCode"
            value={shippingDetails.pinCode}
            onChange={handleChange}
            className="input input-bordered w-full max-w-md my-1"
          />
          <button
            type="submit"
            className="btn btn-primary w-full uppercase text-lg"
          >
            Pay Now
          </button>
        </form>
        <button
          className="btn btn-ghost text-xl w-44"
          onClick={() => navigate("/cart")}
        >
          {" "}
          <FaArrowLeft /> Go back
        </button>
      </div>
    </div>
  );
};

export default Shipping;
