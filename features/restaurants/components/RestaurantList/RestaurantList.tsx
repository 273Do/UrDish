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
    <div className=" mt-10 grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 items-center">
      {restaurants.map((restaurant: restaurantObject) => (
        <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
          <div className="neumorphism p-6 h-56 lg:h-72 w-80 lg:w-full transition-all">
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
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
