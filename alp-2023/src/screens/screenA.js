import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable
  } from 'react-native';

  export default function ScreenA({navigation}) {
    const onPressHandler = () => {
      navigation.navigate("ScreenB", {itemName:"HELLO",id:12});
    }
  
    return(
      <View style={styles.body}>
        <Text style={styles.text}>Screen ALALALAL</Text>
        <Pressable 
          style={styles.button}
          onPress={onPressHandler}>
          <Text style={[styles.text,{
            color:"#FFF",
            fontSize: 20,
          }]}>Go to screen B</Text>
        </Pressable>
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

