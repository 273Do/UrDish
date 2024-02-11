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
  const [restaurantsData, setRestaurantsData] = useState<restaurantObject[]>(
    []
  );
  // 暗号化されたAPIのパラメータを復号化
  // APIのパラメータを使用できる形に修正
  const decrypted_params = decryptString(
    searchParams.q?.toString().replace(/ /g, "+") as string
  ).replace(/-/g, "=");

  console.log("ページ：", searchParams.page);
  console.log(decrypted_params);

  // APIを叩いてレストラン一覧のデータを取得
  useEffect(() => {
    const fetch_restaurants = fetchRestaurantData(
      decrypted_params + "&count=72"
    );
    fetch_restaurants.then((data) => {
      setRestaurantsData(data);
    });
  }, []);

  console.log(restaurantsData);

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      {/* レストランの一覧，ページネーションを表示する．表示項目がなければnoDataページを表示 */}
      {restaurantsData.length === 0 ? (
        <NoData />
      ) : (
        <Pagination data={restaurantsData} />
      )}
      <BackMainPageButton />
      <layout.Footer />
    </div>
  );
};

export default Restaurants;
