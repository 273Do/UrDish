import type { restaurantObject } from "@/app/types";
import Image from "next/image";

// レストラン詳細表示のコンポーネント
const RestaurantCard = ({ restaurant }: { restaurant: restaurantObject }) => {
  return (
    <div className="neumorphism mb-8 flex h-auto w-[340px] flex-col duration-300 hover:-translate-y-2 lg:m-20 lg:size-[630px]">
      <div className="p-4 pb-0 text-sm lg:flex lg:text-base">
        <Image
          src={restaurant.photo.pc.m}
          alt={restaurant.name}
          width={300}
          height={300}
          className=" w-100 lg:w-300 h-100 lg:h-300"
        />
        <div className="mt-3 flex-row lg:m-3">
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
          <div className="opacity-45">
            <p>{restaurant.budget.average}</p>
            <p>{restaurant.budget_memo}</p>
          </div>
        </div>
        <div className=" mb-4">
          <p>住所・アクセス</p>
          <div className="opacity-45">
            <p>{restaurant.address}</p>
            <p>{restaurant.access}</p>
          </div>
        </div>
        <div>
          <p>営業日・定休日</p>
          <div className="opacity-45">
            <p>{restaurant.open}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
