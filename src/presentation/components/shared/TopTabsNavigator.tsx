import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../../screens/home/HomeScreen';
import { ProfileScreen } from '../../screens/profile/ProfileScreen';
import { AboutScreen } from '../../screens/about/Abouts';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () =>  {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}