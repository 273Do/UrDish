import { restaurantObject } from "@/app/types";
import { RestaurantList } from "@/features/restaurants/components";

// ページネーションのコンポーネント
const Pagination = ({ data }: { data: restaurantObject[] }) => {
  console.log(data);

  return <div>{/* <RestaurantList restaurants={} /> */}</div>;
};

export default Pagination;
