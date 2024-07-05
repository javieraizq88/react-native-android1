import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { Calculadora } from '../screens/calculadora/Calculadora';
import { Calculadora2 } from '../screens/calculadora2/Calculadora2';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="contador" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="calculadora" component={Calculadora} />
      <Tab.Screen name="calculadora 2" component={Calculadora2} />
    </Tab.Navigator>
  );
}