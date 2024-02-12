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
    <div className=" m-5 grid grid-cols-1 gap-10 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 items-center">
      {restaurants.map((restaurant: restaurantObject) => (
        <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
          <div className="neumorphism flex flex-col p-4 h-56 lg:h-64 w-80 lg:w-full transition-all">
            <p className=" text-xl text-center mb-2">{restaurant.name}</p>
            <div className="flex mb-2">
              <Image
                src={restaurant.photo.pc.m}
                alt={restaurant.name}
                width={200}
                height={200}
                className="lg:w-auto lg:h-auto"
              />
              <div className="w-72 m-4 mr-0 opacity-45">
                <div>
                  <p>{restaurant.genre.name}</p>
                  <p>{restaurant.genre.catch}</p>
                </div>
                <p className="mt-6">{restaurant.catch}</p>
              </div>
            </div>
            <p className="mt-auto text-xs text-center opacity-45">
              {restaurant.mobile_access}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RestaurantList;
