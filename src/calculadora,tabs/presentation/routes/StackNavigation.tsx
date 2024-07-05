import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { AboutScreen } from '../screens/about/Abouts';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/ssetting/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export type RootStackParams = {
  Home: undefined,
  Product: {
    id: number,
    name: string
  },
  Products: undefined,
  About: undefined,
  Profile: undefined,
  Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  })

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      }
    }} >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}