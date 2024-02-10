import { inter } from "../utils/font";
import { fetchRestaurantData } from "../utils/api";
import { restaurantObject } from "../types";
import * as layout from "@/app/components/Index";
import { RestaurantList } from "@/features/restaurants/components";
import BackMainPageButton from "../components/elements/BackMainPageButton/BackMainPageButton";
import NoData from "@/features/nodata/components/NoData";
import { decryptString } from "../utils/hashing";

// SSR
// レストラン一覧ページのコンポーネント
const Restaurants = async ({
  // ページのurlからクエリを取得
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // 暗号化されたAPIのパラメータを復号化
  // APIのパラメータを使用できる形に修正
  const decrypted_params = decryptString(
    searchParams.q?.toString().replace(/ /g, "+") as string
  ).replace(/-/g, "=");

  console.log(decrypted_params);

  // APIを叩いてレストラン一覧のデータを取得
  const restaurants = await fetchRestaurantData(decrypted_params);

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      {/* レストランの一覧を表示する．表示項目がなければnotDataページを表示 */}
      {restaurants.length === 0 ? (
        <NoData />
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

// U2FsdGVkX1/jbSfiW4C/1qOFpU1+3cJWfiD6M101+KqeiG5yJQQGdORqcOmGTy8cD7FTiOvPBkCU2/w6tm9h4SIcEkIIIlWNh8+ucIfFowg=
// U2FsdGVkX1/jbSfiW4C/1qOFpU1 3cJWfiD6M101 KqeiG5yJQQGdORqcOmGTy8cD7FTiOvPBkCU2/w6tm9h4SIcEkIIIlWNh8 ucIfFowg=
