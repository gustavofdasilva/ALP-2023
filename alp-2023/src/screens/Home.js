import React, { useEffect, useState } from 'react';
import { 
    StyleSheet, 
    View, 
    Text,
    Pressable,
    Alert
  } from 'react-native';
import globalStyle from '../utils/globalStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

  export default function Home({navigation}) {

    const [userName,setUserName] = useState('')

    useEffect(() => {
        getData();
    }, [])
    

    const getData = async () => {
      try {
        await AsyncStorage.getItem('userName')
          .then(value => {
            if (value!=null) {
              setUserName(value)
            }
          })
      } catch (error) {
        Alert.alert("Warning",error)
      }
    }
  
    return(
      <View style={globalStyle.body}>
        <Text style={globalStyle.text}>Home</Text>
        <Text style={globalStyle.text}>Welcome {userName}</Text>
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


