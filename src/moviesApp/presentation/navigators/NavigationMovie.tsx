import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreenMovie } from '../screens/home/HomeScreenMovie';
import { DetailScreenMovie } from '../screens/details/DetailsScreenMovie';

export type RootStackParams ={
    Home: undefined;
    Details: {movieId: number},
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"  component={HomeScreenMovie} />
      <Stack.Screen name="Details" component={DetailScreenMovie} />
    </Stack.Navigator>
  );
}


