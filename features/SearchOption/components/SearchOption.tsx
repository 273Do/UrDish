import { useRef } from "react";

const SearchOption = ({
  option_value,
  onOptionUpdate,
}: {
  option_value: { keyword: string; order: number };
  onOptionUpdate: (option_id: string, value: number | string) => void;
}) => {
  // 検索オプションを更新する親コンポーネントから呼び出す
  const handleOptionUpdate = (option_id: string, value: number | string) => {
    onOptionUpdate(option_id, value);
  };

  // useRefを使用するための変数
  const ref = useRef<HTMLInputElement | null>(null);

  return (
    <div className="-m-1 flex flex-col items-center">
      <div className="group">
        <input
          ref={ref}
          required
          type="text"
          className="input"
          defaultValue={option_value.keyword}
          onChange={() =>
            handleOptionUpdate("keyword", ref.current?.value || "")
          }
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>キーワードを入力</label>
      </div>
      <div>
        <select
          className="select mt-1"
          defaultValue={option_value.order}
          onChange={(e) => handleOptionUpdate("order", e.target.value)}
        >
          <option value="1">距離順</option>
          <option value="4">おすすめ順</option>
        </select>
      </div>
    </div>
  );
};

export default SearchOption;
