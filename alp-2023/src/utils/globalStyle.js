import { StyleSheet } from "react-native";

export default StyleSheet.create({  
        body: {
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        },
        text: {
          fontSize:40,
          fontWeight: 'bold',
        },
        button: {
          backgroundColor:'#09f',
          width: 240,
          height: 70,
          justifyContent:'center',
          alignItems:'center',
          margin: 10,
        },
        input: {
            width: 240,
            height: 50,
            justifyContent:'center',
            alignItems:'center',
            fontSize: 20,
            padding: 10,
            margin: 10,
            backgroundColor: '#FFF',
            borderColor: '#000',
            borderWidth: 1,
        }
})