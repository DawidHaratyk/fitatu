import { API } from "../../env";

export interface Nutrients {
  ENERC_KCAL: number;
  PROCNT: number;
  FAT: number;
  CHOCDF: number;
  FIBTG: number;
}

export interface Food {
  foodId: string;
  label: string;
  knownAs: string;
  nutrients: Nutrients;
  category: string;
  categoryLabel: string;
  image: string;
}

export interface Measure {
  uri: string;
  label: string;
}

export interface RootObject {
  food: Food;
  measures: Measure[];
}

export const getGroceryProducts = async (
  searchValue: string
): Promise<RootObject[]> => {
  const response = await (await fetch(`${API}&query=${searchValue}`)).json();
  return response.hints;
};
