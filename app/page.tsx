"use client"; //CSR

import { inter } from "./utils/font";
import type { geolocationObject } from "./types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as layout from "@/app/components/Index";
import { encryptString } from "./utils/hashing";
import { distances_data } from "./utils/distances_data";
import SearchOption from "@/features/SearchOption/components/SearchOption";

// メインページのコンポーネント
export default function Home() {
  // 検索半径のモードを保持する変数
  const [selectDistance, setSelectDistance] = useState<number>(2);
  // 現在地を取得して，モードなどの設定が可能かの状態を保持する変数
  const [isAvailable, setAvailable] = useState<boolean>(false);
  // 現在地の緯度と経度を保持する変数
  const [currentLocation, setCurrentLocation] = useState<geolocationObject>({
    latitude: 0,
    longitude: 0,
  });
  // 検索オプションを表示するかどうかの状態を保持する変数
  const [isSelectOption, setIsSelectOption] = useState<boolean>(false);
  // 検索オプションを保持する変数
  const [option, setOption] = useState<{ keyword: string; order: number }>({
    keyword: "",
    order: 1,
  });

  // useRouterを使用するための変数
  const router = useRouter();

  // -----ページが読み込まれたときに実行される処理------
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  // 現在地を取得する処理
  const successCallback = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setAvailable(true);
    setCurrentLocation({ latitude, longitude });
  };

  // 現在地の取得が失敗したときの処理
  const errorCallback = (_error: GeolocationPositionError) => {
    setAvailable(false);
  };
  // --------------------------------------------

  // スライダーを動かしたときに検索距離を設定する処理
  const handleSliderChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectDistance(parseInt(e.target.value));
  };

  // スライダーからマウスを離したときにページ遷移をする処理
  const handleMouseUp = () => {
    // APIの検索クエリを作成
    // "="が含まれているとうまくハッシュ化することができないので"-"に置き換えている
    const restaurant_search_params = `&lat-${currentLocation.latitude}&lng-${
      currentLocation.longitude
    }${option.keyword.length === 0 ? "" : `&keyword-${option.keyword}`}${
      option.order === 1 ? "" : `&order-${option.order}`
    }&range-${selectDistance + 1}`;

    const hash = encryptString(restaurant_search_params);
    // クエリを含んで次のページへ遷移
    router.push(`/restaurants?q=${hash}`);
  };

  // 検索オプションを更新する処理
  const updateOption = (option_id: string, value: number | string) => {
    setOption((prevCounts) => ({
      ...prevCounts,
      [option_id]: value,
    }));
  };

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header title="" />
      <div className="flex h-full flex-col items-center justify-center">
        <div className="h-20"></div>
        <div className="flex flex-col items-center justify-center">
          <p className=" mb-9 text-2xl transition-all lg:text-5xl">
            レストランを見つけましょう。
          </p>
          <div
            style={!isAvailable ? { opacity: 0.5, pointerEvents: "none" } : {}}
            className="neumorphism flex flex-col items-center justify-center px-12 py-4 transition-all duration-300 hover:-translate-y-2 lg:px-20 lg:py-5"
          >
            {isSelectOption ? (
              <div className=" w-[276px]">
                <SearchOption
                  option_value={option}
                  onOptionUpdate={updateOption}
                />
              </div>
            ) : (
              <>
                <input
                  type="range"
                  min="0"
                  max="4"
                  value={selectDistance}
                  onChange={(e) => handleSliderChange(e)}
                  onMouseUp={() => handleMouseUp()}
                  className="mt-2"
                />
                <div className="mt-6 flex w-[276px]">
                  {isAvailable ? (
                    <>
                      <p className="mr-3 opacity-45">
                        現在地からの検索半径を指定
                      </p>
                      <p className="w-14">{distances_data[selectDistance]}m</p>
                    </>
                  ) : (
                    <p className="mr-3 text-center opacity-45">
                      現在地を取得できませんでした。
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
          <p
            className="mt-4 cursor-pointer opacity-45 duration-300 hover:opacity-100"
            onClick={() => setIsSelectOption(!isSelectOption)}
          >
            {isSelectOption ? "閉じる" : "検索オプション"}
          </p>
        </div>
      </div>
      <layout.Footer />
    </div>
  );
}
