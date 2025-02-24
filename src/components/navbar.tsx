import { UserButton } from "@clerk/nextjs";
import React from "react";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <div className="h-12 bg-white flex justify-between items-center px-4 border-b fixed top-0 left-0 w-full shadow-sm">
      <div>
        <SidebarTrigger />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
