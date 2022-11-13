import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./HomeScreen";
import { AddProductsScreen } from "./AddProductsScreen";
import { Text } from "react-native";

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProductsScreen"
        component={AddProductsScreen}
        options={{
          headerTitle: () => <Text>Nazwa posiłku</Text>,
          // jak tutaj otrzymać propsy które przesyłamy jako drugi argument wywołując navigation.navigate() i to dobrze otypować
        }}
      />
    </Stack.Navigator>
  );
};
