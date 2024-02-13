import { inter } from "@/app/utils/font";
import Link from "next/link";

// データがない場合のコンポーネント
const NoData = () => {
  return (
    <div className={`card neumorphism mt-40 lg:mt-64 ${inter.className}`}>
      <Link href="/">
        <div className="icon">
          <p className="text-3xl">:-(</p>
        </div>
        <p className="title">NoData</p>
        <p className="text">
          レストランが見つかりませんでした。クリックして検索画面に戻ります。
        </p>
      </Link>
    </div>
  );
};

export default NoData;
