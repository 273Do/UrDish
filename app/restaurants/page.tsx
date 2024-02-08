import * as layout from "@/app/components/layouts/Index";
import { inter } from "../utils/font";
import Link from "next/link";

// SSR
const Restaurants = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className={`App ${inter.className}`}>
      <layout.Header />
      <div>
        <Link href={`/restaurants/id`}>
          <p>レストラン1</p>
        </Link>
        <Link href={`/restaurants/id`}>
          <p>レストラン2</p>
        </Link>
      </div>
      <layout.Footer />
    </div>
  );
};

export default Restaurants;
