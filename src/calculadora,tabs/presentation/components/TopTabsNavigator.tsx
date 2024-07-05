import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/Abouts';
import { HamburgerMenu } from './HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator>
        </>
    );
}