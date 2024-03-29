import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer_bg fixed bottom-0 flex h-14 w-full items-center justify-center">
      <a
        className="mx-2"
        href="https://273doworks.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className=" text-base">273doworks</p>
      </a>
      <a className="mx-2" href="http://webservice.recruit.co.jp/">
        <Image
          src="http://webservice.recruit.co.jp/banner/hotpepper-s.gif"
          alt="ホットペッパーグルメ Webサービス"
          width="135"
          height="17"
          title="ホットペッパーグルメ Webサービス"
        />
      </a>
    </footer>
  );
};

export default Footer;
