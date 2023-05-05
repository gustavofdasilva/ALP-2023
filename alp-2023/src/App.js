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

export default function App() { return (
    <NavigationContainer>
      <Drawer.Navigator
        barStyle={{
          backgroundColor: "#F09"
        }}
        activeColor='#FFF'
        inactiveColor='#000'
        labeled={false}
        screenOptions={({route})=>({
          tabBarIcon:({focused, size, color}) => {
            let iconName;
            if(route.name === 'ScreenA') {
              iconName='mail-outline';
              size = 30;
              color = focused?"#FFF":"#000";
            } else {
              iconName='happy-outline';
              size = 30;
              color = focused?"#FFF":"#000";
            }
            return(
              <Ionicons
                name={iconName}
                size={size}
                color={color}/>
            )
          },
          
        })}>
        
          
        <Drawer.Screen
          name='ScreenA'
          component={ScreenA}/>
        <Drawer.Screen
          name='ScreenB'
          component={ScreenB}/>
      </Drawer.Navigator>
    </NavigationContainer>
);}


