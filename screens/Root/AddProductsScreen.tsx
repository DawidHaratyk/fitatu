import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { ProductsInStock } from "../../components/ProductsInStock/ProductsInStock";
import { windowWidth } from "../../constants";

export function AddProductsScreen() {
  return (
    <View style={styles.addProductsScreenContainer}>
      <TextInput placeholder="Wpisz nazwę" style={styles.productsInput} />
      <ProductsInStock />
    </View>
  );
}
const styles = StyleSheet.create({
  productsInput: {
    borderWidth: 1,
    borderColor: "#8e9aaf",
    borderRadius: 4,
    width: windowWidth * 0.7,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginTop: 20,
    marginBottom: 15,
  },
  addProductsScreenContainer: {
    alignItems: "center",
  },
});
