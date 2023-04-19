import React from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';

const Header = () => {
    return(
      <View style={styles.view}>
        <Text style={styles.text}>
          React Native Tutorial
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
  view: {
    height:50,
    backgroundColor: "#00F",
    justifyContent: 'center',
    alignItems:'center',
    width:"100%"
  },
  text: {
    fontSize: 20,
    color:'#fff',
  }
})

export default Header;