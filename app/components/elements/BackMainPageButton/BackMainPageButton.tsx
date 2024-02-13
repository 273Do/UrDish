import Link from "next/link";

// メイン画面に戻るボタンのコンポーネント
const BackMainPageButton = () => {
  return (
    <Link href="/">
      <p className=" hover:opacity-50 duration-300">検索画面に戻る</p>
    </Link>
  );
};

export default BackMainPageButton;
