import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable
  } from 'react-native';

  export default function ScreenB() {
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    body: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    text: {
      fontSize:40,
      fontWeight: 'bold'
    },
    button: {
      backgroundColor:'#09f',
      width: 240,
      height: 70,
      justifyContent:'center',
      alignItems:'center',
      margin: 10,
    }
  });