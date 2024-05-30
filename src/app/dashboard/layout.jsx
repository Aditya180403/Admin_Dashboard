import React from "react";
import Navbar from "../ui/dashboard/navbar/page.jsx";
import Sidebar from "../ui/dashboard/sidebar/page.jsx";
import Footer from "../ui/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row ">
       <div className=" flex-1  bg-gray-800 p-5 min-h-screen w-1/4">
        <Sidebar />
      </div> 
      <div className=" flex-col flex-4 p-5 w-3/4 ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
