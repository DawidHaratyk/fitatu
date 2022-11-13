import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MealWrapper } from "../MealWrapper/MealWrapper";

const mealsData = [
  {
    title: "Śniadanie",
    calories: 0,
    products: [
      {
        name: "Pomidor",
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
        id: 1,
      },
      {
        name: "Pomidor",
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
        id: 2,
      },
    ],
  },
  {
    title: "Obiad",
    calories: 0,
    products: [
      {
        name: "Pomidor",
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
        id: 1,
      },
    ],
  },
  {
    title: "Kolacja",
    calories: 0,
    products: [
      {
        name: "Pomidor",
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
        id: 1,
      },
      {
        name: "Pomidor",
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
        id: 2,
      },
    ],
  },
];

export const AllMealsWrapper = () => {
  const mealsWrappersList = mealsData.map((meal) => (
    <MealWrapper {...meal} key={meal.title} />
  ));

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.allMealsWrapper}
    >
      {mealsWrappersList}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  allMealsWrapper: {
    marginVertical: 25,
    // marginHorizontal: 15,
  },
});
