import React from 'react';
import {
    Pressable,
    Text
} from 'react-native';

const SubmitButton = (props) => {
    return(<Pressable
        onPress={props.onPressFunction}
        hitSlop={{top:10,bottom:10,left:10,right:10}}
        android_ripple={"#F00"}
        style={({pressed})=>[{
          backgroundColor: pressed?"#888":props.color,
          padding: 10,
          width: '50%',
          textAlign:'center',
          borderRadius:5
        },
        {...props.style}]}>
          <Text style={{
              color:"#FFF",
              fontSize:20
            }}>{props.title}</Text>
        </Pressable>)
}


export default SubmitButton;