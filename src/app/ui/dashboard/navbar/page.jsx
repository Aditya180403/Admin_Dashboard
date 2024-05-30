"use client"
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-lg bg-gray-800 flex flex-col md:flex-row items-center justify-between">
      <div className="text-textSoft font-bold capitalize md:text-lg">
        {pathname.split("/").pop()}
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:gap-5">
        <div className="flex items-center gap-2 bg-gray-900 p-2 rounded-lg">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none text-text focus:outline-none"
          />
        </div>
        <div className="flex gap-5">
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
