import { restaurantObject } from "@/app/types";
import Image from "next/image";

// レストラン詳細表示のコンポーネント
const RestaurantCard = ({ restaurant }: { restaurant: restaurantObject }) => {
  return (
    <div>
      <Image
        src={restaurant.photo.pc.m}
        alt={restaurant.name}
        width={150}
        height={150}
      />
      <p>{restaurant.name}</p>
      <br />
      <div>
        <p>
          {restaurant.genre.name}
          {restaurant.sub_genre.name}
        </p>
        <p>{restaurant.genre.catch}</p>
      </div>
      <br />
      <div>
        <p>お店メモ：{restaurant.shop_detail_memo}</p>
        <p>{restaurant.catch}</p>
        <p>{restaurant.other_memo}</p>
      </div>
      <br />
      <div>
        <a
          href={`${restaurant.urls.pc}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>予約はこちらから</p>
        </a>
      </div>
      <br />
      <div>
        <p>{restaurant.budget.average}</p>
        <p>{restaurant.budget_memo}</p>
      </div>
      <br />
      <div>
        <p>{restaurant.address}</p>
        <p>{restaurant.access}</p>
      </div>
      <br />
      <div>
        <p>{restaurant.open}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
