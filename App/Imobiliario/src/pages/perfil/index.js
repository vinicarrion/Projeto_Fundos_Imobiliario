import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

export default function Perfil(){
    const navigation = useNavigation();
    return(
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.form}>
        <View style={styles.titleForm}>
        <Text style={styles.title}>Carteira</Text>
        </View>
        
        <View style={styles.form2}>
            <View style={styles.form3}>
            <Text style={styles.aplicado}>Dinheiro aplicado: {}</Text>
            </View>
            <Text style={styles.title2}>Fundos Escolhidos:</Text>
            <View style={styles.fundos}>
            
                <Text style={styles.fiis}>ikms11</Text>
                <Text style={styles.fiis}>itmk11</Text>
                <Text style={styles.fiis}>xmlt11</Text>
                <Text style={styles.fiis}>ject11</Text>
                <Text style={styles.fiis}>tmsld11</Text>
            </View>
            <View style={styles.form4}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Fundos')}>
                <Text style={styles.buttonText}>Fundos Imobiliarios</Text>
            </TouchableOpacity>
            </View>
        </View>
        
        </View>
        </ScrollView>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4b0082',
    },
    form:{
        margin:20,
    },
    titleForm:{
          paddingTop: 10,
          paddingBottom:18,
          alignItems:'center',
          width:'100%',
          backgroundColor:'#38a69d',
    },
    title:{
        fontSize:40,
        color:'#fff',
    },
    form2:{
      paddingTop: 23,
      paddingLeft:9,
    },
    form3:{
       borderBottomWidth:1,
       paddingBottom:5,
    },
    aplicado:{
       fontSize:18,
       color:'#fff'
    },
    title2:{
       paddingTop:10,
       paddingBottom:10,
       fontSize:20,
    },
    fundos:{
       paddingBottom:10,
    },
    fiis:{
       fontSize:16,
    },
    form4:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    button:{
        flex:1,
        backgroundColor: '#38a69d',
        width:'80%',
        height: 40,
        borderRadius:4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
     buttonText:{
        color:'#fff',
        fontSize: 17,
        fontWeight:'bold',
     },
})