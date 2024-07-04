import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../../config/theme/global.styles';
import { Text, Title } from 'react-native-paper';
import { TopTabsNavigator } from '../components/shared/TopTabsNavigator';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
    >
      <Tab.Screen name="Tab1" options={{ title: '1', tabBarIcon: ({ color }) => (<Text style={{color}}>tab1</Text>) }} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title: '2', tabBarIcon: ({ color }) => (<Text style={{color}}>tab2</Text>) }} component={TopTabsNavigator} />
      <Tab.Screen name="Tab3" options={{ title: '3', tabBarIcon: ({ color }) => (<Text style={{color}}>tab3</Text>) }} component={Tab3Screen} />
    </Tab.Navigator>
  );
}