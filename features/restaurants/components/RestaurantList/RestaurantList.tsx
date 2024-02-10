import { restaurantObject } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

// レストラン一覧表示のコンポーネント
const RestaurantList = ({ restaurant }: { restaurant: restaurantObject }) => {
  return (
    <Link href={`/restaurants/${restaurant.id}`}>
      <Image
        src={restaurant.photo.pc.m}
        alt={restaurant.name}
        width={150}
        height={150}
      />
      <p>{restaurant.name}</p>
      <div>
        <p>{restaurant.genre.name}</p>
        <p>{restaurant.genre.catch}</p>
      </div>
      <p>{restaurant.mobile_access}</p>
    </Link>
  );
};

export default RestaurantList;
