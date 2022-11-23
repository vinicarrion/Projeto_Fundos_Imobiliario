import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 

export default function SignIn(){
    const navigation = useNavigation();
    
    const[cpfLogin, setCpfLogin ]=useState(null)
    const[senhaLogin, setSenhaLogin ]=useState(null)
    const[erroLogin, setErroLogin ]=useState(null)

    function validationLogin(){
        setCpfLogin(null)
        setSenhaLogin(null)
        if(cpfLogin == null && senhaLogin == null){
            return null
        }else{
            return navigation.navigate('Perfil')
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
            <Text style={styles.message}>Tela Bem Vido(a)</Text>
            </View>
            <View style={styles.containerForm}>
             <View style={styles.ageito}>
            <Text style={styles.title}>CPF</Text>
            <TextInput placeholder="CPF" name="cpfLogin" style={styles.input} keyboardType="numeric" returnKeyType="default"/>
            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Senha" name="senhaLogin" style={styles.input} returnKeyType="default"/>
            <TouchableOpacity style={styles.button} onPress={()=> validationLogin()}>
                <Text style={styles.buttonText }>Acessar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRegister} onPress={()=> navigation.navigate('Cadastre')}>
                <Text style={styles.buttonText}>Crie sua conta</Text>
            </TouchableOpacity>
             </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4b0082',   
    },
    containerHeader: {
        marginTop: '15%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    ageito:{
        margin:20,
    },
    containerForm:{
        backgroundColor: '#ABB8C3',
        flex: 1,
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingStar: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        marginTop:28,
    },
    input:{
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
    },
    button:{
        backgroundColor: '#38a69d',
        width:'100%',
        height: 40,
        borderRadius:4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
     buttonText:{
        color:'#fff',
        fontSize: 18,
        fontWeight:'bold',
     },
     buttonRegister:{
        marginTop:14,
        alignSelf: 'center',
     }
})
