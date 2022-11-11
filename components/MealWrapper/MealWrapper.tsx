import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { windowWidth } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

interface MealProps {
  title: string;
  calories: number;
}

export const MealWrapper = ({ title, calories }: MealProps) => {
  return (
    <View style={styles.mealWrapper}>
      <View>
        <Text style={styles.mealTitle}>{title}</Text>
        <Text style={styles.mealCalories}>{calories} kcal</Text>
      </View>
      <View style={styles.addProductButton}>
        <Ionicons name="add" size={32} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth - 30,
    marginBottom: 25,
  },
  addProductButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#bae0af",
  },
  addProductIcon: {
    color: "white",
    fontSize: 40,
  },
  mealTitle: {
    fontWeight: "700",
    fontSize: 20,
  },
  mealCalories: {
    color: "gray",
  },
});
