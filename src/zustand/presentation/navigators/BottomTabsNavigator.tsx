import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';


const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1"  component={HomeScreen} />
      <Tab.Screen name="Tab2" component={SettingsScreen} />
      <Tab.Screen name="Tab3" component={ProfileScreen} />
    </Tab.Navigator>
  );
}