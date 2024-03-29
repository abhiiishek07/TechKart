import { AiFillFileText } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const DASHBOARD_LIST = [
  {
    title: "Dashboard",
    value: "dashboard",
    icon: <RiDashboardFill />,
  },
  {
    title: "Products",
    value: "products",
    icon: <RiShoppingBag3Fill />,
  },
  {
    title: "Customers",
    value: "customers",
    icon: <IoIosPeople />,
  },
  {
    title: "Transactions",
    value: "transactions",
    icon: <AiFillFileText />,
  },
];

const CHARTS_LIST = [
  {
    title: "Bar",
    value: "bar",
    icon: <FaChartBar />,
  },
  {
    title: "Pie",
    value: "pie",
    icon: <FaChartPie />,
  },
  {
    title: "Line",
    value: "line",
    icon: <FaChartLine />,
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside className="p-4 h-fit w-80 border-t flex flex-col sticky top-16 ">
      <h6 className="text-gray-500 text-sm mt-2 ">DASHBOARD</h6>
      <ul className="flex flex-col mt-2 pl-2 font-semibold">
        {DASHBOARD_LIST.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg ${
              location.pathname.includes(`/admin/${item.value}`) &&
              "bg-blue-100 text-blue-600"
            }`}
          >
            <Link
              to={`/admin/${item.value}`}
              className="flex items-center gap-2"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <h6 className="text-gray-500 text-sm mt-5 ">CHARTS</h6>
      <ul className="flex flex-col mt-2  pl-3 font-semibold">
        {CHARTS_LIST.map((item, index) => (
          <li
            key={index}
            className={`p-2 rounded-lg ${
              location.pathname.includes(`/admin/${item.value}`) &&
              "bg-blue-100 text-blue-600"
            }`}
          >
            <Link
              to={`/admin/chart/${item.value}`}
              className="flex items-center gap-2"
            >
              {item.icon}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <h6 className="text-gray-500 text-sm mt-5 ">APPS</h6>
      <ul className="flex flex-col mt-2  pl-3 font-semibold">
        <li
          className={`p-2 rounded-lg ${
            location.pathname.includes(`/admin/app/coupon`) &&
            "bg-blue-100 text-blue-600"
          }`}
        >
          <Link
            to={`/admin/chart/app/coupon`}
            className="flex items-center gap-2"
          >
            <RiCoupon3Fill />
            Coupon
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
