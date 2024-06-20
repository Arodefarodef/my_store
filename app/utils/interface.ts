import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { newButtonVar } from "../reuse/variance";

export interface iUser {
  Name: string;
  email: string;
  avatar: string;
  password: string;
  role: string;
}

export interface iProduct {
  Title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
}

export interface iButton
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof newButtonVar> {
  children: ReactNode;
  icon?: ReactNode;
}
