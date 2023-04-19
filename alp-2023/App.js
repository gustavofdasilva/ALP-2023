import React, {useState} from 'react';
import { 
  StyleSheet, 
  View, 
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function screenA() {
  return(
    <View>
      <Text>Screen A</Text>
    </View>
  )
}

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="screenA"
          component={screenA}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App() 
