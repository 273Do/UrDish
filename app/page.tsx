"use client"; //CSR

import { inter } from "./utils/font";
import { geolocationObject } from "./types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as layout from "@/app/components/Index";
import { encryptString } from "./utils/hashing";
import { distances_data } from "./utils/distances_data";

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
  // 検索フィルターの状態を保持する変数
  // TODO:別ファイルにオブジェクトを読み込んでstringで返すようにするfubc(locarion, filter)
  const [filters, setFilters] = useState({
    wifi: 0,
    wedding: 0,
    course: 0,
    free_drink: 0,
    free_food: 0,
    private_room: 0,
    horigotatsu: 0,
    tatami: 0,
    cocktail: 0,
    shochu: 0,
    sake: 0,
    wine: 0,
    card: 0,
    non_smoking: 0,
    charter: 0,
    ktai: 0,
    parking: 0,
    barrier_free: 0,
    sommelier: 0,
    night_view: 0,
    open_air: 0,
    show: 0,
    equipment: 0,
    karaoke: 0,
    band: 0,
    tv: 0,
    lunch: 0,
    midnight: 0,
    midnight_meal: 0,
    english: 0,
    pet: 0,
    child: 0,
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
  const errorCallback = (error: GeolocationPositionError) => {
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
    // =が含まれているとうまくハッシュ化することができないので-に置き換えている
    const hash = encryptString(
      `&lat-${currentLocation.latitude}&lng-${
        currentLocation.longitude
      }&range-${selectDistance + 1}`
    );
    // クエリを含んで次のページへ遷移
    router.push(`/restaurants?q=${hash}`);
  };

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header title={""} />
      <div className="h-full flex flex-col justify-center items-center">
        <div className="h-20"></div>
        <div className="flex flex-col justify-center items-center">
          <p className=" text-2xl lg:text-5xl mb-9 transition-all">
            レストランを見つけましょう。
          </p>
          <div
            style={!isAvailable ? { opacity: 0.5, pointerEvents: "none" } : {}}
            className="neumorphism flex flex-col justify-center items-center px-12 py-4 lg:px-20 lg:py-5 transition-all hover:-translate-y-2 duration-300"
          >
            <input
              type="range"
              min="0"
              max="4"
              value={selectDistance}
              onChange={(e) => handleSliderChange(e)}
              onMouseUp={() => handleMouseUp()}
              className="mt-2"
            />
            <div className="flex mt-6 w-[276px]">
              {isAvailable ? (
                <>
                  <p className="mr-3 opacity-45">現在地からの検索半径を指定</p>
                  <p className="w-14">{distances_data[selectDistance]}m</p>
                </>
              ) : (
                <p className="text-center mr-3 opacity-45">
                  現在地を取得できませんでした。
                </p>
              )}
            </div>
          </div>
          <p className="mt-4 opacity-45 cursor-pointer">検索オプション</p>
        </div>
      </div>
      <layout.Footer />
    </div>
  );
}
