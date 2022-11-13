import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { windowWidth } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ProductProps } from "../../types";
import { Products } from "../Products/Products";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface MealProps {
  title: string;
  calories: number;
  products: ProductProps[];
}

export const MealWrapper = ({ title, calories, products }: MealProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [areProductsVisible, setAreProductsVisible] = useState(false);

  const currentArrowIcon = areProductsVisible ? (
    <AntDesign name="up" size={24} color="black" />
  ) : (
    <AntDesign name="down" size={24} color="black" />
  );

  const handleToggleProductsVisibility = () =>
    setAreProductsVisible((prevState) => !prevState);

  const handleGoToAddProductsScreen = () =>
    navigation.navigate("AddProductsScreen", {
      title,
    });

  return (
    <View style={styles.mealAndProductsContainer}>
      <View style={styles.mealWrapper}>
        <View style={styles.leftSideContainer}>
          <View style={styles.mealNameContainer}>
            <Text style={styles.mealTitle}>{title}</Text>
            <Text style={styles.mealCalories}>{calories} kcal</Text>
          </View>

          <Pressable onPress={handleToggleProductsVisibility}>
            {currentArrowIcon}
          </Pressable>
        </View>
        <TouchableOpacity
          style={styles.addProductButton}
          onPress={handleGoToAddProductsScreen}
        >
          <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <Products products={products} areProductsVisible={areProductsVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  mealWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  addProductButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#bae0af",
  },
  mealTitle: {
    fontWeight: "700",
    fontSize: 20,
  },
  mealCalories: {
    color: "gray",
  },
  leftSideContainer: {
    flexDirection: "row",
  },
  mealNameContainer: {
    marginRight: 10,
  },
  mealAndProductsContainer: {
    marginBottom: 10,
  },
});
