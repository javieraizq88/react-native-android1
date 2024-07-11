/**
 * @format
 */

import 'react-native-gesture-handler'

import {AppRegistry} from 'react-native';
// import {App} from './src/App';
// import {Main} from './src/Main'

import {name as appName} from './app.json';
// import { MovieApp } from './src/MovieApp';
import { ComponentApp } from './src/ComponentApp'

AppRegistry.registerComponent(appName, () => ComponentApp);
