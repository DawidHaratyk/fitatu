import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProductProps } from "../../types";
import { AntDesign } from "@expo/vector-icons";
import { windowWidth } from "../../constants";

export const SelectedProduct = ({
  name,
  amount,
  calories,
  protein,
  fat,
  carbohydrates,
}: ProductProps) => {
  return (
    <View style={styles.productContainer}>
      <View>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productDetail}>{amount}</Text>
        <View style={styles.productNutrientsContainer}>
          <Text style={styles.productDetail}>{calories} kcal</Text>
          <Text style={styles.productDetail}>{protein} B</Text>
          <Text style={styles.productDetail}>{fat} T</Text>
          <Text style={styles.productDetail}>{carbohydrates} W</Text>
        </View>
      </View>
      <Pressable>
        <AntDesign name="close" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#e8e8e8",
    marginBottom: 3,
    padding: 15,
    width: windowWidth,
  },
  productNutrientsContainer: {
    flexDirection: "row",
  },
  productName: {
    fontSize: 18,
  },
  productDetail: {
    fontSize: 13,
    color: "#8e9aaf",
    marginRight: 25,
  },
});
