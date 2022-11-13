import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export interface CaloriesItemProps {
  color: string;
  category: string;
  value: number;
}

export interface ProductProps {
  name: string;
  amount: number;
  calories: number;
  protein: number;
  fat: number;
  carbohydrates: number;
  id: number;
}
