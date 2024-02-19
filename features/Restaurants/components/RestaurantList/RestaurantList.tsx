import type { restaurantObject } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

// レストラン一覧表示のコンポーネント
const RestaurantList = ({
  restaurants,
}: {
  restaurants: restaurantObject[];
}) => {
  return (
    <div className="m-5 grid grid-cols-1 items-center gap-10 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {restaurants.map((restaurant: restaurantObject) => (
        <Link
          href={`/restaurants/${restaurant.id}`}
          key={restaurant.id}
          className="duration-300 hover:-translate-y-2"
        >
          <div className="neumorphism flex h-auto w-80 flex-col p-2 transition-all lg:w-full lg:p-4">
            <p className="mb-2 text-center text-base lg:text-xl">
              {restaurant.name}
            </p>
            <div className=" mb-2 flex text-sm lg:text-base">
              <Image
                src={restaurant.photo.pc.m}
                alt={restaurant.name}
                width={200}
                height={200}
                className="size-36 lg:size-auto"
              />
              <div className="m-2 mr-0 w-72 opacity-45 lg:m-4">
                <div>
                  <p>{restaurant.genre.name}</p>
                  <p>{restaurant.genre.catch}</p>
                </div>
                <p className="mt-3 lg:mt-6">{restaurant.catch}</p>
              </div>
            </div>
            <p className="mt-auto text-center text-xs opacity-45">
              {restaurant.mobile_access}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
