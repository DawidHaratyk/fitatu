import { View } from "react-native";
import React from "react";
import { ProductProps } from "../../types";
import { SelectedProduct } from "../SelectedProduct/SelectedProduct";

interface ProductsProps {
  products: ProductProps[];
  areProductsVisible: boolean;
}

export const Products = ({ products, areProductsVisible }: ProductsProps) => {
  const productsList = products.map((product) => (
    <SelectedProduct {...product} key={product.id} />
  ));

  return (
    <View
      style={{
        display: areProductsVisible ? "flex" : "none",
      }}
    >
      {productsList}
    </View>
  );
};
