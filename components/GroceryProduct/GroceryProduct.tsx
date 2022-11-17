import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Food, Measure } from "../ProductsInStock/getGroceryProducts";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { windowWidth } from "../../constants";

interface GroceryProdyctProps {
  food: Food;
  measures: Measure[];
}

export const GroceryProduct = ({ food, measures }: GroceryProdyctProps) => {
  const productName = food.label.split(",")[0] + "," + food.label.split(",")[1];

  console.log(food, measures);

  return (
    <View style={styles.groceryProductContainer}>
      <View style={styles.productDescription}>
        <View style={styles.productDetailsContainer}>
          <Text>{productName}</Text>
          <Text style={styles.productAmount}>/100g</Text>
        </View>
        <View style={styles.productKcalContainer}>
          <Text style={styles.productKcal}>
            {Math.floor(food.nutrients.ENERC_KCAL)} kcal
          </Text>
        </View>
      </View>
      <BouncyCheckbox fillColor="#38b000" />
    </View>
  );
};

const styles = StyleSheet.create({
  groceryProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: windowWidth,
    marginVertical: 15,
  },
  productDescription: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    width: "80%",
  },
  productKcal: {
    alignSelf: "flex-end",
    flexBasis: 100,
    color: "gray",
  },
  productDetailsContainer: {
    flexBasis: 200,
  },
  productKcalContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  productAmount: {
    color: "gray",
  },
});
