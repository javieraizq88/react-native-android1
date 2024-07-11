This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# librerias usasdas
-> react native paper
      $ npm install react-native-paper
      $ npm install react-native-safe-area-context
      <!-- para q codigo se lea para IOS -> $ npx pod-install NO USAR, da error-->
      
-> react native vector icons      
      $ npm install react-native-vector-icons
      -> ANDROID
            1. Edit android/app/build.gradle (NOT android/build.gradle) and add:

                  $ project.ext.vectoricons = [
                        iconFontNames: [ 'Ionicons.ttf'] // Specify font files
                  ]

                   apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

      -> IOS
            1. Navigate to node_modules/react-native-vector-icons and drag the Fonts folder (or select specific fonts) into your Xcode project.

            2. Make sure your app is checked under "Add to targets," and if adding the whole folder, check "Create groups."
               Not familiar with Xcode? Check out this article.
               Edit Info.plist and add a property called Fonts provided by application (or UIAppFonts if Xcode autocomplete is not working):

            3. List of all available fonts to copy & paste in Info.plist
                  <key>UIAppFonts</key>
                  <array>
                  <string>AntDesign.ttf</string>
                  <string>Entypo.ttf</string>
                  <string>EvilIcons.ttf</string>
                  <string>Feather.ttf</string>
                  <string>FontAwesome.ttf</string>
                  <string>FontAwesome5_Brands.ttf</string>
                  <string>FontAwesome5_Regular.ttf</string>
                  <string>FontAwesome5_Solid.ttf</string>
                  <string>FontAwesome6_Brands.ttf</string>
                  <string>FontAwesome6_Regular.ttf</string>
                  <string>FontAwesome6_Solid.ttf</string>
                  <string>Foundation.ttf</string>
                  <string>Ionicons.ttf</string>
                  <string>MaterialIcons.ttf</string>
                  <string>MaterialCommunityIcons.ttf</string>
                  <string>SimpleLineIcons.ttf</string>
                  <string>Octicons.ttf</string>
                  <string>Zocial.ttf</string>
                  <string>Fontisto.ttf</string>
                  </array>

            4. # npx pod-install


-> react navigation native https://reactnavigation.org/docs/getting-started/
      $ npm install @react-navigation/native
      1. Installing dependencies into a bare React Native project
            $ npm install react-native-screens react-native-safe-area-context
      MAC 
            1. If you're on a Mac and developing for iOS
                  $ npx pod-install ios

      ANDROID
            1. Edit MainActivity.kt or MainActivity.java file which is located under android/app/src/main/java/<your package name>/
            2. agregar
                  override fun onCreate(savedInstanceState: Bundle?) { super.onCreate(null) }
            3. abajo de package statement en los imports 
                  $ import android.os.Bundle;
            4. envolver toda al app en un <NavigationContainer> </NavigationContainer> 


->  react navigation stack
      1. $ npm install @react-navigation/stack
      2. $ npm install react-native-gesture-handler
      3. en el App.tsx agregar 
            $ import 'react-native-gesture-handler';
      4, npm install @react-native-masked-view/masked-view
      5. npx pod-install ios
      6. crear el componente StackNavigator e importar los componentes
      7. en App.tsx agregar el componente   <tackNavigator />


->  react navigation drawer
      1. # npm install @react-navigation/drawer
      2. # npm install react-native-gesture-handler react-native-reanimated
      3. en babel.config.js agregar
            #  plugins: ['react-native-reanimated/plugin']

-> react navigation bottom tabs
      $ npm install @react-navigation/bottom-tabs
            
-> react navigation material-top-tabs
      $ npm install @react-navigation/material-top-tabs react-native-tab-view
      $ npm install react-native-pager-view
      $ npx pod-install ios

-> react navigation Stack
      $  npm install @react-navigation/stack
      $ npm install react-native-gesture-handler

-> zustand ---> gestor de estados useState
      $ npm install zustand



-> API peliculas
      1. crear cuenta en www.themoviedb.org
      2. ingresar a la cuenta > Editar perfil > API > hacer click para generar nueva key > developer > aceptar > completar formulario
      3. crear variable entorno (.env)
            $ THE_MOVIE_DB_KEY= 
            $ 


-> Axios
      $ npm i axios


-> dotenv para encriptar variables de entorno
      1. npm install -D react-native-dotenv
      2. en babelconfig agregar el plug in 
                ['module:react-native-dotenv', 
                        {
                              envName: 'APP_ENV',
                              moduleName: '@env',
                              path: '.env'
                        }
                ]
      3. crear archivo types/env.d.ts y agregar 
            declare module '@env' {
                  export const THE_MOVIE_DB_KEY: string;
            }
      4. reiniciar el computador y correr la app

# Step 1: clonar proyecto


## Step 2: instalar dependencias
```bash
# actualizar dependencias 
npm install
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

# instalar libreria para IOS
npx pod-install
```


### Step 3: clonar el archivo .env.template a .env y configurar las variables de entorno
```bash
npx react-native start --reset-cache
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

