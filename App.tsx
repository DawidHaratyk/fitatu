import { HomeScreen } from "./screens/Root/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Test } from "./screens/Test";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AddProductsScreen } from "./screens/Root/AddProductsScreen";
import { Root } from "./screens/Root/Root";

// type RootStackParamList = {
//   Home: { navigator: string };
// };

export const Tab = createBottomTabNavigator();

export default function App() {
  // dlaczego Tab.Navigator nie działa
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: "black" },
          tabBarLabelStyle: { color: "white" },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Root}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Test"
          component={Test}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="fastfood" size={24} color="white" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
