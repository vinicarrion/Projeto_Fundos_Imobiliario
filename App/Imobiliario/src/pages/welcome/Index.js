import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native"; 
export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.title}>FUNDÃO</Text>
                <Text style={styles.text}>LOGIN</Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'#4b0082',
       paddingTop: '55%',
       alignItems:"center"
    },
    containerForm:{
       flex: 1,
       paddingStart:'5%',
       paddingEnd:'5%',
    },
    title:{
        fontSize: 34,
        fontWeight: 'bold',
        margintop: 28,
        marginBottom: 12,
    },
    text:{
       paddingTop: 20,
       fontSize: 24,
       marginLeft: '9%',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        height:'5%',
        alignSelf: 'center',
        button: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%',
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})