import { inter } from "@/app/utils/font";
import * as layout from "@/app/components/Index";
import Link from "next/link";

// データがない場合のコンポーネント
const NoData = () => {
  return (
    <div className={`App ${inter.className}`}>
      <layout.Header title={""} /> <div className="h-24"></div>
      <div className=" flex flex-col items-center">
        <div className={"card neumorphism mt-40 lg:mt-64 "}>
          <Link href="/">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="38px"
                width="38px"
                version="1.1"
                id="heart"
                viewBox="0 0 471.701 471.701"
                xmlSpace="preserve"
              >
                <linearGradient id="gradientColor">
                  <stop offset="5%" stop-color="#7eaaff"></stop>
                  <stop offset="95%" stop-color="#ff48fb"></stop>
                </linearGradient>
              </svg>
              <p className=" -ml-9 text-3xl">:-(</p>
            </div>
            <p className="title">NotFound</p>
            <p className="text">
              ページが見つかりませんでした。　　クリックして検索画面に戻ります。
            </p>
          </Link>
        </div>
      </div>
      <div className="h-14"></div>
      <layout.Footer />
    </div>
  );
};

export default NoData;
