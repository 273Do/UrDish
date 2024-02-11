import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full flex h-14 items-center justify-center">
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
