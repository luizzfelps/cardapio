import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, Image, StatusBar} from "react-native"
import {Input} from "react-native-elements"
import { NavigationContainer } from "@react-navigation/native"
import database from "../config/firebaseconfig"
import styles from "./style.js"
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"
import { TextInput } from "react-native-gesture-handler"
import { FontAwesome } from "@expo/vector-icons"

export default function Home({ navigation }){
    const [text, onChangeText] = useState();
    const [isVisible, setIsVisible] = useState(false)
    const [cpf , setCpf] = useState()
    const [mesa, setMesa] = useState()
    const [errorCPF, setErrorCPF] = useState(null)
    const [errorMesa, setErrorMesa] = useState(null)
    const [error, setError] = useState(true)

   /* function validarCPF()
    {
        setError(null)

        if(cpf == null)
        {
            setError("Preencha seu cpf")
            setErrorCPF(true)
        }
        if(cpf != null)
        {
            const cpfRegex = new RegExp("^[0-9]*$");
            if(!cpfRegex.test(cpf))
            {
                setError("O campo CPF aceita somente números!")
                setErrorCPF(true)

            }
            setErrorCPF(false)
        }
    }
    function validarMesa()
    {
        setError(null)

        if(mesa == null)
        {
            setError("Preencha com o número da mesa")
            setErrorMesa(true)
        }
        if(mesa != null)
        {
            const mesaRegex = new RegExp("^[0-9]*$");
            if(!mesaRegex.test(mesa))
            {
                setError("O campo mesa aceita somente números!")
                setErrorMesa(true)
            }
            setErrorMesa(false)
        }
    }
        
    */
    return(
            <View style={styles.containerHome}>
                 <StatusBar backgroundColor = "#fff" barStyle="dark-content" />
                    <Image source={require("../../assets/imgBackground.jpeg")} style={styles.img}/>
                    <TouchableOpacity
                    style={styles.buttonsHome}
                    onPress={() => {navigation.navigate("CategoriasAdmin")}}>
                        <FontAwesome
                        name="user"
                        size={23}
                        color="#4682B4">
                        </FontAwesome>
                </TouchableOpacity>
                <Text
                    style={{
                   position: 'absolute',
                   marginTop: 480,
                    fontSize: 15,
                    textAlign: 'center',
                    color: "#fff",
                    }}>
                        AJUDAMOS VOCÊ A ENCONTRAR OS MELHORES E MAIS SABOROSOS ALIMENTOS 
                </Text>
               
                <TouchableOpacity
                activeOpacity = {0.8}
                
                style={styles.btnCardapio}
                    onPress={() => {navigation.navigate("Categorias")}}>
                    <Text style={styles.textHome}>Acessar o Cardapio  <Text></Text>
                        <FontAwesome 
                        name="list"
                        size={23}
                        color="#4682B4"
                        />
                    </Text>
                     
                </TouchableOpacity>
              
                
               
            </View>
             )
            }
  /*  return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#333'}}>
           
        <View style={styles.container}>
        <StatusBar backgroundColor = "#333" barStyle="default" />
            <Image source={require("../../assets/imgBackground.jpeg")} style={styles.img}/>

            <TouchableOpacity style={styles.btnAdm}
            onPress={()=>{
                navigation.navigate("CategoriasAdmin")
            }}>
                
                <FontAwesome 
                name="user"
                size={40}
                color="#fff"
                />
                
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btnCardapio} 
            onPress={()=>{
                navigation.navigate("Categorias")
                activeOpacity= 0.7
            }}
            >
            <FontAwesome 
                name="list"
                size={50}
                color="#fff"
            />
                
               
            </TouchableOpacity>*/
           

   
