import * as layout from "@/app/components/layouts/Index";
import { inter } from "../utils/font";
import Link from "next/link";
import { fetchRestaurantData } from "../utils/apiUtils";

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
  //   console.log(restaurants);

  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      <div>
        <Link href={`/restaurants/id`}>
          <p>レストラン1</p>
        </Link>
        <Link href={`/restaurants/id`}>
          <p>レストラン2</p>
        </Link>
      </div>
      <layout.Footer />
    </div>
  );
};

export default Restaurants;
