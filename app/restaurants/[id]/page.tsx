import { inter } from "@/app/utils/font";
import { fetchRestaurantData } from "@/app/utils/api";
import * as layout from "@/app/components/Index";
import { RestaurantCard } from "@/features/restaurants/components";
import BackMainPageButton from "@/app/components/elements/BackMainPageButton/BackMainPageButton";
import NoData from "@/features/nodata/components/NoData";

// SSR
// レストラン詳細ページのコンポーネント
const RestaurantDetail = async ({
  // ページのurlからパラメータとクエリを取得
  params,
}: {
  params: { id: string };
}) => {
  // idを指定してAPIを叩いてレストランの詳細データを取得
  const fetch_restaurant = await fetchRestaurantData(`&id=${params.id}`);
  const restaurant = fetch_restaurant[0];

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header title={restaurant.name} />
      <div className="h-24"></div>
      <div className=" flex flex-col items-center">
        {/* レストランの詳細を表示する．表示項目がなければnoDataページを表示 */}
        {fetch_restaurant.length === 0 ? (
          <NoData />
        ) : (
          <>
            <RestaurantCard restaurant={restaurant} />
          </>
        )}
        <div className=" text-center">
          <BackMainPageButton />
        </div>
      </div>
      <div className=" h-14"></div>
      <layout.Footer />
    </div>
  );
};

export default RestaurantDetail;
