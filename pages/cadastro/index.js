import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native"; 

export default function Cadastre(){
    const navigation = useNavigation();

    const[nome, setNome ]=useState(null)
    const[cpf, setCpf ]=useState(null)
    const[endereco, setEndereco ]=useState(null)
    const[email, setEmail ]=useState(null)
    const[senha, setSenha ]=useState(null)
    const[erro, setErro ]=useState(null)
    const[verificado, setVerificado ]=useState(null)
      function validar(){
        setNome(null)
        setCpf(null)
        setEndereco(null)
        setEmail(null)
        setSenha(null)
        setErro(null)
        if(nome == null && cpf == null && endereco == null && email == null && senha ==null){
        setErro("Reprovado")
        return null
       }else{
        setErro("prencha seu Nome Corretamente")
        return navigation.navigate('Perfil')
       }
    }
      
    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.containerHeader}>
            <Text style={styles.message}>Cadastre(a)</Text>
            </View>
            <View style={styles.containerForm}>
             <View style={styles.ageito}>
             <Text style={styles.title}>Nome</Text>
            <TextInput placeholder="nome" nema="nome" style={styles.input} onChangeText={setNome} returnKeyType="default" erroMessage={erro} />
             <Text style={styles.title}>CPF</Text>
            <TextInput placeholder="CPF" name="cpf" style={styles.input} onChangeText={setCpf} keyboardType="numeric" returnKeyType="default"/>
            <Text style={styles.title}>Endereço</Text>
            <TextInput name="endereco" placeholder="Endereço" style={styles.input} onChangeText={setEndereco} returnKeyType="default"/>
            <Text style={styles.title}>Email</Text>
            <TextInput name="email" placeholder="Email" style={styles.input} onChangeText={setEmail} returnKeyType="default"/>
            <Text style={styles.title}>Senha</Text>
            <TextInput name="senha" placeholder="Senha" style={styles.input} onChangeText={setSenha} returnKeyType="default"/>
            <TouchableOpacity style={styles.button} onPress={()=> validar() }>
                <Text style={styles.buttonText} erroMessage={setErro}>Cadastrar</Text>
            </TouchableOpacity>
             </View>
            </View>
            </ScrollView>
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
