import MenuLink from "./menuLink/menuLink";
import { MdOutlineSettings, MdHelpCenter, MdLogout, MdAccountCircle, MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney } from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="sticky top-20">
      <div className="flex flex-col items-center md:flex-row gap-5 p-5 md:p-10 mb-5 md:mb-20 bg-slate-900 h-auto md:h-28 rounded-xl">
        <MdAccountCircle size={60} />
        <div className="flex flex-col gap-1">
          <span className="font-bold">User</span>
          <span className="text-sm md:text-base text-gray-500">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((cat, catIndex) => (
          <li key={catIndex}>
            <span className="font-bold text-sm md:text-base text-gray-500 my-2">{cat.title}</span>
            {cat.list.map((item, itemIndex) => (
              <MenuLink item={item} key={itemIndex} />
            ))}
          </li>
        ))}
      </ul>
      <form>
        <button className="flex items-center gap-2 px-5 py-2 my-2 rounded-lg cursor-pointer bg-transparent border-none text-white w-full hover:bg-gray-700">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
