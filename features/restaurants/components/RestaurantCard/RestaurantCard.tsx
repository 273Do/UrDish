import { restaurantObject } from "@/app/types";
import Image from "next/image";

// レストラン詳細表示のコンポーネント
const RestaurantCard = ({ restaurant }: { restaurant: restaurantObject }) => {
  console.log(restaurant);
  return (
    <div className="neumorphism flex flex-col w-[340px] lg:w-[630px] h-auto lg:h-[630px] mb-8 lg:m-20">
      <div className="lg:flex p-4 pb-0 text-sm lg:text-base">
        <Image
          src={restaurant.photo.pc.m}
          alt={restaurant.name}
          width={300}
          height={300}
          className=" w-100 lg:w-300 h-100 lg:h-300"
        />
        <div className="flex-row mt-3 lg:m-3">
          <div className="mb-3">
            <p>{restaurant.genre.name}</p>
            <p>{restaurant.sub_genre?.name}</p>
            <p>{restaurant.genre.catch}</p>
          </div>
          <div className="mb-3">
            <p>{restaurant.shop_detail_memo}</p>
            <p>{restaurant.catch}</p>
            <p>{restaurant.other_memo}</p>
          </div>
          <div>
            <a
              href={`${restaurant.urls.pc}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="underline decoration-solid">予約はこちらから</p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-auto p-4 pt-0  text-sm lg:text-base">
        <div className=" mb-4">
          <p>予算</p>
          <span className="opacity-45">
            <p>{restaurant.budget.average}</p>
            <p>{restaurant.budget_memo}</p>
          </span>
        </div>
        <div className=" mb-4">
          <p>住所・アクセス</p>
          <span className="opacity-45">
            <p>{restaurant.address}</p>
            <p>{restaurant.access}</p>
          </span>
        </div>
        <div>
          <p>営業日・定休日</p>
          <span className="opacity-45">
            <p>{restaurant.open}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
