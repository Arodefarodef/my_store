import { cva } from "class-variance-authority";

export const newButtonVar = cva(
  "flex items-center border rounded-md px-4 py-2 text-white",
  {
    variants: {
      something: {
        pry: "text-black",
        sec: "bg-green-500",
        warning: "bg-blue-950",
        danger: "bg-red-500",
      },
      size: {
        sm: "text-[12px]",
        md: "text-[16px]",
        lg: "text-[20px]",
        xs: "text-[10px]",
      },
    },
    defaultVariants: {
      something: "pry",
      size: "md",
    },
  }
);
