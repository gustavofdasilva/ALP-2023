import React from "react";
import { View,Text,StyleSheet, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginButton(props) {


    return (
        <TouchableOpacity style={[styles.body,{
            backgroundColor: props.color,
        }]} onPress={props.onPressFunction}>
            <Text style={styles.text}>{props.text == null ? "Login" : props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    body : {
        padding: 15,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },

    text: {
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    }
})
