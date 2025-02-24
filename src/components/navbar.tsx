import { UserButton } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-12 bg-white flex justify-between items-center px-4 border-b fixed top-0 left-0 w-full shadow-sm">
      <div className="flex items-center">
        <Image
          src={`/logo.svg`}
          width={150}
          height={150}
          alt="logo"
          className=""
        />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
