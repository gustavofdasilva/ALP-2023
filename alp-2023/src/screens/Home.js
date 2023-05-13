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
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

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
        onPress={()=>notifications()}>
        <Text style={[globalStyle.text,{
          color:"#FFF",
          fontSize: 20,
        }]}>Go to login</Text>
      </Pressable>
    </View>
  )
}

async function notifications() {
  await Notifications.dismissAllNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Hello!',
      body: 'This is the body of the notification, made by react native in expo',
      data: new Date(Date.now()),
      launchImageName: 'https://s2.glbimg.com/2vuA-R9eLK9q0yc5prAboLxBwIA=/1024x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/e/8/AoMju0TPWBvwkfwj2BXA/1.jpg'
    },
    trigger: null,
    
  })
}


