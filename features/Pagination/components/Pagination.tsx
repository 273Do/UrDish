import { restaurantObject } from "@/app/types";
import { splitData } from "@/app/utils/splitData";
import { RestaurantList } from "@/features/restaurants/components";
import { useState } from "react";

// ページネーションのコンポーネント
const Pagination = ({ data }: { data: restaurantObject[] }) => {
  // 現在のページ番号(0スタート)を保持する変数
  const [currentPage, setCurrentPage] = useState<number>(0);

  // レストランデータを12個ずつに分割
  const data_array = splitData(data, 12);

  // ページボタンをクリックしたときにページを切り替える処理
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
  // 現在のページ番号をハイライトする
  const page_buttons = (
    <ul className="flex text-center my-2">
      {currentPage + 1 !== 1 && (
        <li
          className="mx-2  opacity-45 cursor-pointer"
          onClick={() => handleClick(currentPage - 1)}
        >
          {"<"}
        </li>
      )}
      {data_array.map((item, index) => (
        <li
          style={{ opacity: `${currentPage === index ? 1 : 0.45}` }}
          className="mx-2 cursor-pointer"
          key={index + 1}
          onClick={() => handleClick(index)}
        >
          {index + 1}
        </li>
      ))}
      {currentPage + 1 !== data_array.length && (
        <li
          className="mx-2  opacity-45 cursor-pointer"
          onClick={() => handleClick(currentPage + 1)}
        >
          {">"}
        </li>
      )}
    </ul>
  );

  return (
    <>
      {/* 現在のページに対応するデータ群を一覧表示 */}
      <RestaurantList restaurants={data_array[currentPage]} />
      {page_buttons}
    </>
  );
};

export default Pagination;
