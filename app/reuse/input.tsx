import React, { FC, InputHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iPut extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  icon?: ReactNode;
  title: string;
  place: string;
}

const Input: FC<iPut> = ({
  className,
  children,
  title,
  place,
  icon,
  ...props
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-[12px] font-semibold">{title}</label>
      <div
        className={twMerge(
          "flex items-center border rounded-md w-[300px] px-2",
          className
        )}
      >
        <input
          {...props}
          placeholder={place}
          className=" outline-none h-[45px] rounded-md w-[100%] "
        />

        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Input;
