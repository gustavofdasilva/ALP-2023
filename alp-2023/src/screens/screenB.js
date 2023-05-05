import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable
  } from 'react-native';

  export default function ScreenB({route}) {
    const {itemName, id} = route.params;

    return(
      <View style={styles.body}>
        <Text style={styles.text}>Screen B</Text>
        <Text>{itemName} + {id}</Text>
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