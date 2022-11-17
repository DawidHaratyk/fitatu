import { HomeScreen } from "./screens/Root/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Test } from "./screens/Test";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AddProductsScreen } from "./screens/Root/AddProductsScreen";
import { Root } from "./screens/Root/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Text } from "react-native";

const queryClient = new QueryClient();

// type RootStackParamList = {
//   Home: { navigator: string };
// };

export const Tab = createBottomTabNavigator();

export default function App() {
  // dlaczego Tab.Navigator nie działa
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name === "Home") {
                return <FontAwesome name="home" size={size} color={color} />;
              } else if (route.name === "Test") {
                return (
                  <MaterialIcons name="fastfood" size={size} color={color} />
                );
              }
            },
            tabBarStyle: { backgroundColor: "black" },
            tabBarLabelStyle: { color: "white" },
            headerShown: false,
            tabBarActiveTintColor: "gray",
            tabBarInactiveTintColor: "white",
          })}
        >
          <Tab.Screen
            name="Home"
            component={Root}
            options={{
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Home</Text>
              ),
            }}
          />
          <Tab.Screen
            name="Test"
            component={Test}
            options={{
              tabBarLabel: ({ color }) => (
                <Text style={{ color, fontSize: 12 }}>Test</Text>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
