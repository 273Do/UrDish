import { restaurantObject } from "@/app/types";
import { splitData } from "@/app/utils/splitData";
import { RestaurantList } from "@/features/restaurants/components";
import { useState } from "react";

// ページネーションのコンポーネント
const Pagination = ({ data }: { data: restaurantObject[] }) => {
  console.log(data);
  console.log(data.length);

  // 現在のページングを保持する変数
  const [currentPage, setCurrentPage] = useState<number>(0);

  // レストランデータを12個ずつに分割
  const data_array = splitData(data, 12);
  console.log(data_array);
  console.log("page_num", currentPage);

  // ページボタンをクリックしたときにデータを切り替える処理
  const handleClick = (index: number) => {
    setCurrentPage(index);
    // ページトップにスクロール
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // ページの数だけボタンを表示する
  // 現在のページに合わせて，戻るボタンと進むボタンを表示する
  const page_buttons = (
    <ul>
      {currentPage + 1 !== 1 && (
        <li onClick={() => handleClick(currentPage - 1)}>{"<"}</li>
      )}
      {data_array.map((item, index) => (
        <li key={index + 1} onClick={() => handleClick(index)}>
          {index + 1}
        </li>
      ))}
      {currentPage + 1 !== data_array.length && (
        <li onClick={() => handleClick(currentPage + 1)}>{">"}</li>
      )}
    </ul>
  );

  return (
    <div>
      {/* 現在のページに対応するデータ群を一覧表示 */}
      <RestaurantList restaurants={data_array[currentPage]} />
      {page_buttons}
    </div>
  );
};

export default Pagination;
