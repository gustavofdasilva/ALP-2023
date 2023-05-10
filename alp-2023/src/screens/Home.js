import React from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable
  } from 'react-native';
import globalStyle from '../utils/globalStyle';

  export default function Home({navigation}) {
  
    return(
      <View style={globalStyle.body}>
        <Text style={globalStyle.text}>Home</Text>
        <Pressable 
          style={globalStyle.button}
          onPress={()=>navigation.push('Login')}>
          <Text style={[globalStyle.text,{
            color:"#FFF",
            fontSize: 20,
          }]}>Go to login</Text>
        </Pressable>
      </View>
    )
  }


