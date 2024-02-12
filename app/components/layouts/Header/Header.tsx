import React from "react";
import Logo from "@/public/UrDish.png";
import Image from "next/image";

const Header = ({ title, icon = "" }: { title: string; icon?: string }) => {
  return (
    <header className="header_bg fixed left-0 right-0 flex items-center z-10">
      <Image src={Logo} alt={"UrDish_Logo"} width={80} height={80} />
      <div className="flex-1 mr-20">
        {title.length === 0 ? (
          <h1 className="text-3xl text-center">UrDish</h1>
        ) : (
          <div className="flex justify-center items-center">
            {icon.length !== 0 && (
              <Image src={icon} alt={title} width={35} height={35} />
            )}
            <h1 className="ml-2 text-base lg:text-3xl">{title}</h1>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
