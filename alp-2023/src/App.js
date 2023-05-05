import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './screens/screenA';
import ScreenB from './screens/screenB';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType='back'
        hideStatusBar={true}
        >
        
          
        <Drawer.Screen
          name='ScreenA'
          component={ScreenA}/>
        <Drawer.Screen
          name='ScreenB'
          component={ScreenB}/>
      </Drawer.Navigator>
    </NavigationContainer>
);}

export default App;

