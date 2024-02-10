import { inter } from "../utils/font";
import Link from "next/link";
import { fetchRestaurantData } from "../utils/api";
import { restaurantObject } from "../types";
import * as layout from "@/app/components/Index";
import { RestaurantList } from "@/features/restaurants/components";
import BackMainPageButton from "../components/elements/BackMainPageButton/BackMainPageButton";

// SSR
// レストラン一覧ページのコンポーネント
const Restaurants = async ({
  // ページのurlからパラメータとクエリを取得
  //   params,
  searchParams,
}: {
  //   params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  console.log(searchParams.query);
  // APIを叩いてレストラン一覧のデータを取得
  const restaurants: any = await fetchRestaurantData(
    "&lat=34.67&lng=135.52&range=5&order=4"
  );

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      {/* レストランの一覧を表示する．表示項目がなければnotFoundページを表示 */}
      {restaurants.length === 0 ? (
        <p>error</p>
      ) : (
        restaurants.map((restaurant: restaurantObject) => (
          <RestaurantList restaurant={restaurant} key={restaurant.id} />
        ))
      )}
      <BackMainPageButton />
      <layout.Footer />
    </div>
  );
};

export default Restaurants;
