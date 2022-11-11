import React from "react";
import { Header } from "../components/Header/Header";
import { AllMealsWrapper } from "../components/AllMealsWrapper/AllMealsWrapper";
import { Button, Text } from "react-native";

export function HomeScreen({ navigation }: any) {
  return (
    <>
      <Header />
      <AllMealsWrapper />
    </>
  );
}
