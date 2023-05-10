import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Login from './screens/login';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator
        drawerType='back'
        hideStatusBar={true}
        >
        
          
        <Stack.Screen
          name='Home'
          component={Home}
          />
        <Stack.Screen
          name='Login'
          component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
);}

export default App;

