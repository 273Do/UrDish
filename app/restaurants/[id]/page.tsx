import { inter } from "@/app/utils/font";
import { fetchRestaurantData } from "@/app/utils/api";
import * as layout from "@/app/components/Index";

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
  console.log(params.id);

  // APIを叩いてレストランの詳細データを取得
  const fetch_restaurant = await fetchRestaurantData("&id=J000622512");
  const restaurant = fetch_restaurant[0];
  //   console.log(restaurant);
  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      <p>{restaurant.id}</p>
      <p>{restaurant.name}</p>
      <layout.Footer />
    </div>
  );
};

export default RestaurantDetail;
