import React from "react";
import Logo from "@/public/UrDish.png";
import Image from "next/image";

const Header = ({ title, icon = "" }: { title: string; icon?: string }) => {
  return (
    <header className="header_bg fixed inset-x-0 z-10 flex items-center">
      <Image src={Logo} alt="UrDish_Logo" width={80} height={80} />
      <div className="mr-20 flex-1">
        {/* ヘッダーの表示内容をページによって切り替える */}
        {title.length === 0 ? (
          <h1 className="text-center text-3xl">UrDish</h1>
        ) : (
          <div className="flex items-center justify-center">
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
