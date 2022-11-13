import React from "react";
import { Tab } from "../../App";
import { AllMealsWrapper } from "../../components/AllMealsWrapper/AllMealsWrapper";
import { CaloriesController } from "../../components/CaloriesController/CaloriesController";
import { Header } from "../../components/Header/Header";

export function HomeScreen({ navigation }: any) {
  console.log(navigation);

  return (
    <>
      <Header />
      <AllMealsWrapper />
      <CaloriesController />
    </>
  );
}
