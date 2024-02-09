"use client"; //CSR

import * as layout from "@/app/components/layouts/Index";
import { inter } from "./utils/font";
import { geolocationObject } from "./types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// メインページのコンポーネント
export default function Home() {
  // 検索半径を格納している配列
  const distances_data: number[] = [300, 500, 1000, 2000, 3000];

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

  // スライダーを動かしたときの処理
  const handleSliderChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSelectDistance(parseInt(e.target.value));
  };

  // スライダーからマウスを離したときの処理
  const handleMouseUp = () => {
    // localStorage.setItem(
    //   "query",
    //   `${position.latitude}, ${position.longitude}`
    // );
    // コンソールに現在地の緯度と経度を表示
    console.log(
      `latitude: ${currentLocation.latitude}longitude: ${currentLocation.longitude}`
    );
    // クエリを含んで次のページへ遷移
    router.push("/restaurants?query=hash_query");
  };

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      <div>
        <p>レストランを見つけましょう。</p>
        <div>
          <input
            type="range"
            min="0"
            max="4"
            value={selectDistance}
            onChange={(e) => handleSliderChange(e)}
            onMouseUp={() => handleMouseUp()}
          />
          <p>現在地からの検索半径を指定　{distances_data[selectDistance]}m</p>
        </div>
        <p>{!isAvailable && "非表示"}</p>
        <p>検索オプション</p>
      </div>
      <layout.Footer />
    </div>
  );
}
