import type { restaurantObject } from "../types";

// データをn個ずつに分割する関数
export const splitData = (array: restaurantObject[], number: number) => {
  const length = Math.ceil(array.length / number);
  return new Array(length)
    .fill(undefined, 0, length)
    .map((_, i) => array.slice(i * number, (i + 1) * number));
};
