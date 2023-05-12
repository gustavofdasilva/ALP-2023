import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

  export default function Login({navigation}) {
    
    const [userName, setUserName] = useState('');

      useEffect(() => {
        getData();
    }, [])

    
    

    const getData = async () => {
      try {
        await AsyncStorage.getItem('userName')
          .then(value => {
            if (value!=null) {
              navigation.navigate('Home');
            }
          })
      } catch (error) {
        Alert.alert("Warning",error)
      }
    }

    const setData = async () => {
        if(userName.length==0) {
          Alert.alert("Warning!","Please write a username")
        } else {
          try {
            await AsyncStorage.setItem('userName',userName)
              
          } catch (e) {
            Alert.alert("Warning!",e);
          }
          navigation.navigate('Home');
        }
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
