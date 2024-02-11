import { restaurantObject } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

// レストラン一覧表示のコンポーネント
const RestaurantList = ({
  restaurants,
}: {
  restaurants: restaurantObject[];
}) => {
  return (
    <div className=" w-lvw grid grid-cols-3 gap-4 m-6 items-center">
      {restaurants.map((restaurant: restaurantObject) => (
        <div key={restaurant.id} className="neumorphism m-12 w-full">
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
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
