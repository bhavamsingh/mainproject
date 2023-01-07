//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../widget1/Home';
import Settings from '../widget1/Settings'
import Profile from '../widget1/Profile';

// create a component
const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  
    )}
//make this component available to the app
export default BottomNavigator;
