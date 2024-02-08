import React from "react";
import Logo from "@/public/UrDish.png";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <Image src={Logo} alt={"UrDish_Logo"} width={80} height={80} />
      <p>UrDish</p>
    </div>
  );
};

export default Header;
