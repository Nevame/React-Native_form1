import React, { Component } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

class Loginscreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.LoginTextContainer}>
                    <Text style={styles.LoginText}>Log In </Text>
                </View>

                <View style={styles.TextInputContainer}>
                    <TextInput style={styles.TextInput} placeholder="Username" placeholderTextColor="#aaaaa"/>
                    <TextInput style={styles.TextInput} placeholder="password" placeholderTextColor="#aaaaa" secureTextEntry={true} />
                    <Text style={styles.forgotPassword}>Forgot password?</Text>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.noAccountContainer}>
                    <Text style={styles.noAccountText}>
                        Don't have an account?
                    </Text>
                    <Text style={styles.signUpText}>
                        Sign Up
                    </Text>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create({
    container: {
        marginHorizontal: 50,
        marginTop:50
    },

    LoginText:{
        fontSize:50,
        color: "#5100ad"

    },

    LoginTextContainer:{
        marginBottom: 30

    },

    TextInput:{
        borderBottomWidth:2,
        borderBottomColor: "#5100ad",
        fontSize:20,
        height:50,
        marginTop:30

    },

    TextInputContainer:{
        marginBottom:35
    },

    forgotPassword:{
        alignSelf: "flex-end",
        marginVertical:3,
        color:"#0853a8"
    },

    buttonContainer:{
        height:50,
        backgroundColor:"#5100ad",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginVertical:50
    },

    buttonText:{
        color:"white",
        fontSize:25

    },

    noAccountContainer:{

        flexDirection:"row",
        justifyContent:"center"
    },

    noAccountText:{
        marginRight:10,
        fontSize:16
    },

    signUpText:{
        fontSize:16,
        color:"#5100ad"
    }

})

export default Loginscreen;
