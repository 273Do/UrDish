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
        <p>{restaurant.catch}</p>
        <p>{restaurant.other_memo}</p>
      </div>
      <br />
      <div>
        <a href={`${restaurant.urls.pc}`}>
          <p>{restaurant.urls.pc}</p>
        </a>
      </div>
      <br />
      <div>
        <p>{restaurant.budget.average}</p>
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
