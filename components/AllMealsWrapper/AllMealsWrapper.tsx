import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MealWrapper } from "../MealWrapper/MealWrapper";

const mealsData = [
  {
    title: "Śniadanie",
    calories: 0,
  },
  {
    title: "Obiad",
    calories: 0,
  },
  {
    title: "Kolacja",
    calories: 0,
  },
];

export const AllMealsWrapper = () => {
  const mealsWrappersList = mealsData.map((meal) => <MealWrapper {...meal} />);

  return <View style={styles.allMealsWrapper}>{mealsWrappersList}</View>;
};

const styles = StyleSheet.create({
  allMealsWrapper: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
});
