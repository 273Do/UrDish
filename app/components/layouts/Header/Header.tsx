import React from "react";
import Logo from "@/public/UrDish.png";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center">
      <Image src={Logo} alt={"UrDish_Logo"} width={80} height={80} />
      <div className="flex-1 mr-20">
        <h1 className="text-3xl text-center">UrDish</h1>
      </div>
    </header>
  );
};

export default Header;
