import { HomeScreen } from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { Test } from './screens/Test'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

// type RootStackParamList = {
//   Home: { navigator: string };
// };

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' },
          tabBarLabelStyle: { color: 'white' },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
  )
}
