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
      1. npm install @react-navigation/bottom-tabs
            
# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.


## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# actualizar dependencias 
npm install
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context

# instalar libreria para IOS
npx pod-install


# using npm
npx react-native start --reset-cache

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

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

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
