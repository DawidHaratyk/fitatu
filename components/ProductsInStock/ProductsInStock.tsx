import { ScrollView, Text } from "react-native";
import { getGroceryProducts } from "./getGroceryProducts";
import { useQuery } from "@tanstack/react-query";
import { GroceryProduct } from "../GroceryProduct/GroceryProduct";
import { memo } from "react";

interface ProductsInStockProps {
  searchValue: string;
}

const ProductsInStock = ({ searchValue }: ProductsInStockProps) => {
  const { data, isLoading } = useQuery(["grocery-products"], () =>
    getGroceryProducts(searchValue)
  );

  const products = data ?? [];

  const filteredGroceryProducts = products.filter((product) =>
    product.food.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const displayedGroceryProducts = filteredGroceryProducts.map((product) => (
    <GroceryProduct {...product} />
  ));

  if (isLoading) return <Text>Loading...</Text>;

  return <ScrollView>{displayedGroceryProducts}</ScrollView>;
};

export default memo(ProductsInStock);
