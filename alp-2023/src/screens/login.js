import React, { useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable,
    Alert
  } from 'react-native';
import globalStyle from '../utils/globalStyle';
import { TextInput } from 'react-native-gesture-handler';
import LoginButton from '../utils/button';

  export default function Login({navigation}) {
    
    const [userName, setUserName] = useState('');
    const setData = ()=>{
        Alert.alert('Hello')
    }


    

    return(
      <View style={globalStyle.body}>
        <Text style={globalStyle.text}>Login</Text>
        <TextInput style={globalStyle.input} placeholder='name'
        onChangeText={(value)=>setUserName(value)}/>
        <LoginButton 
            color='#23daff'
            onPressFunction={setData}/>
      </View>
    )
  }
