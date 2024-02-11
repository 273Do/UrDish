"use client"; //CSR

import { inter } from "../utils/font";
import { fetchRestaurantData } from "../utils/api";
import { restaurantObject } from "../types";
import * as layout from "@/app/components/Index";
import BackMainPageButton from "../components/elements/BackMainPageButton/BackMainPageButton";
import NoData from "@/features/nodata/components/NoData";
import { decryptString } from "../utils/hashing";
import { useEffect, useState } from "react";
import Pagination from "@/features/Pagination/components/Pagination";

// レストラン一覧ページのコンポーネント
const Restaurants = ({
  // ページのurlからクエリを取得
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // 取得したレストラン一覧のデータを格納する変数
  const [restaurantsData, setRestaurantsData] = useState<restaurantObject[]>(
    []
  ); // ローディングの状態を保持する変数
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // 暗号化されたAPIのパラメータを復号化
  // APIのパラメータを使用できる形に修正
  const decrypted_params = decryptString(
    searchParams.q?.toString().replace(/ /g, "+") as string
  ).replace(/-/g, "=");

  // ページが読み込まれたときにAPIを叩いてレストラン一覧のデータを取得
  useEffect(() => {
    const fetch_restaurants = fetchRestaurantData(
      decrypted_params + "&count=72"
    );
    fetch_restaurants.then((data) => {
      setRestaurantsData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      {/* レストランの一覧，ページネーションを表示する． */}
      {restaurantsData.length === 0 ? (
        isLoading ? (
          <p>loading now</p>
        ) : (
          // 取得したデータが空かつ，ローディングが終わった場合はnoDataページを表示
          <NoData />
        )
      ) : (
        <Pagination data={restaurantsData} />
      )}
      <BackMainPageButton />
      <layout.Footer />
    </div>
  );
};

export default Restaurants;
