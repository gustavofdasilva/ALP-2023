import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './screens/screenA';
import ScreenB from './screens/screenB';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() { return (
    <NavigationContainer>
      <Tab.Navigator
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
          tabBarActiveTintColor: '#FFF',
          tabBarActiveBackgroundColor: '#40f'
          
        })}>
        
          
        <Tab.Screen
          name='ScreenA'
          component={ScreenA}/>
        <Tab.Screen
          name='ScreenB'
          component={ScreenB}/>
      </Tab.Navigator>
    </NavigationContainer>
);}


