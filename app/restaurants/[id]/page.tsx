import { inter } from "@/app/utils/font";
import { fetchRestaurantData } from "@/app/utils/api";
import * as layout from "@/app/components/Index";
import { RestaurantCard } from "@/features/restaurants/components";
import BackMainPageButton from "@/app/components/elements/BackMainPageButton/BackMainPageButton";

// SSR
// レストラン詳細ページのコンポーネント
const RestaurantDetail = async ({
  // ページのurlからパラメータとクエリを取得
  params,
}: // searchParams,
{
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // idを指定してPIを叩いてレストランの詳細データを取得
  const fetch_restaurant = await fetchRestaurantData(`&id=${params.id}`);
  const restaurant = fetch_restaurant[0];

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      {fetch_restaurant.length === 0 ? (
        <div>error</div>
      ) : (
        <RestaurantCard restaurant={restaurant} />
      )}
      <BackMainPageButton />
      <layout.Footer />
    </div>
  );
};

export default RestaurantDetail;
