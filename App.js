
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VisaHomeScreen from './components/VisaHomeScreen';
import VisaCardScreen from './components/VisaCardScreen';
import HomeTestScreen from './components/HomeTestScreen';
import RobotWalkScreen from './components/RobotWalkScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="HomeTestScreen"
          component={HomeTestScreen}
          options={{ title: 'HomeTestScreen' }}
        />
        <Stack.Screen
          name="VisaHomeScreen"
          component={VisaHomeScreen}
          options={{ title: 'VisaHomeScreen' }}
        />
        <Stack.Screen
          name="VisaCardScreen"
          component={VisaCardScreen}
          options={{ title: 'VisaCardScreen' }}
        />
        <Stack.Screen
          name="RobotWalkScreen"
          component={RobotWalkScreen}
          options={{ title: 'RobotWalkScreen' }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

