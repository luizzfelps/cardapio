import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity} from "react-native"
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

    function validarCPF()
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
        
    
    return(
            <View style={styles.containerHome}>
                {/* <Text style={{color: 'red', marginLeft:20}}>{error}</Text>
                {isVisible === false ? 
                <>
                <Text>Bem vindo, por favor insira o número de seu CPF e mesa</Text>
                <Text>CPF somente números</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCpf}
                    placeholder={'123.456.789.09'}
                    value={cpf}
                    keyboardType="numeric"
                    onBlur={() => {validarCPF()}}

                />
                 <Text>Mesa</Text>
                 <TextInput
                    style={styles.input}
                    onChangeText={setMesa}
                    placeholder={'1'}
                    value={mesa}
                    keyboardType="numeric"
                    onBlur={() => {validarMesa()}}
                    />
                    <TouchableOpacity
                        disabled = {errorCPF === false && errorMesa === false ? false : true}
                        style={styles.excluirProduto}
                        onPress={()=>{
                            setError(null)
                            setIsVisible(true)}}>
                        <FontAwesome
                            name="check-circle"
                            size={43}
                            color="#F92E6A"
                        >
                        </FontAwesome>
                    </TouchableOpacity>
                    </>
                : null}
                { isVisible ?
                <> */}
                <TouchableOpacity
                style={styles.buttonsHome}
                    onPress={() => {navigation.navigate("Categorias")}}>
                     <Text style={styles.textHome}>Cardapio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonsHome}
                    onPress={() => {navigation.navigate("CategoriasAdmin")}}>
                        <FontAwesome
                        name="user"
                        size={23}
                        color="#4682B4">
                        </FontAwesome>
                </TouchableOpacity>
                {/* </>
                 : null } */}
            </View>

    )
}
