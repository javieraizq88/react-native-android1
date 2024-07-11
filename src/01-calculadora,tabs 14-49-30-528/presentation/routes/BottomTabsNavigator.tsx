import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { TopTabsNavigator } from "../../../calculadora,tabs/presentation/components/TopTabsNavigator";
import { StackNavigator } from "../../../calculadora,tabs/presentation/routes/StackNavigation";
import { Tab1Screen } from "../../../calculadora,tabs/presentation/screens/tabs/Tab1Screen";
import { globalColors } from "../../../zustand/config/app-theme";

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
      <Tab.Screen name="Tab3" options={{ title: '3', tabBarIcon: ({ color }) => (<Text style={{color}}>tab3</Text>) }} component={StackNavigator} />
    </Tab.Navigator>
  );
}