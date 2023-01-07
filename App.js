/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Popup from './src/Component/Popup';
import Floating from './src/Component/widget1/Floting';
import BottomNavigator from './src/Component/BottomNavigator/BottomNavigator';

const Stack = createNativeStackNavigator();
const App= () =>{

  return (
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //   <Stack.Screen
  //           name="BottomNavigator"
  //           component={BottomNavigator}
  //       />

  //   </Stack.Navigator>
  // </NavigationContainer>

    // <HomeScreen/>
    <Floating/>
    // <Popup/>


  );
};




export default App;
