import * as layout from "@/app/components/layouts/Index";
import { inter } from "../../utils/font";

// SSR
const RestaurantDetail = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      <p>restaurant_detail</p>
      <layout.Footer />
    </div>
  );
};

export default RestaurantDetail;
