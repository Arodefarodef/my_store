import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const merge = (...data: ClassValue[]) => {
  return twMerge(clsx(data));
};
