import React from "react";
import Logo from "@/public/UrDish.png";
import Image from "next/image";

const Header = ({ title }: { title: string }) => {
  return (
    <header className="header_bg fixed left-0 right-0 flex items-center z-10">
      <Image src={Logo} alt={"UrDish_Logo"} width={80} height={80} />
      <div className="flex-1 mr-20">
        {title.length === 0 ? (
          <h1 className="text-3xl text-center">UrDish</h1>
        ) : (
          <h1 className="text-sm lg:text-3xl text-center w-52 lg:w-full">
            {title}
          </h1>
        )}
      </div>
    </header>
  );
};

export default Header;
