import React, { useState, useEffect } from "react"
import { SearchBar } from 'react-native-elements';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import styles from "./style.js"
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"
import database from "../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"


export default function Buscar({navigation}){

        const [buscaItem, setBuscaItem] = useState();
        const [produtos, setProdutos] = useState([])
        useEffect(() =>{
            database.collection("Produtos").onSnapshot((query)=>{
                const list = []
                query.forEach((doc)=>{
                    list.push({...doc.data(), id: doc.id})
                })
                setProdutos(list)
            })
        }, [])

    return (
        <View style={styles.container}>
           
            <TextInput placeholder ="O que está procurando ?"
            style={styles.textInput}
             value={buscaItem} onChangeText={text=>setBuscaItem(text)}/>
 
            <TouchableOpacity style={styles.buscar}>
                <Text >
                    Buscar</Text>
            </TouchableOpacity>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={produtos}
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.Produtos}>
                        <Text
                        style={styles.ProdutosDescricao}
                        onPress={()=>{
                            navigation.navigate("Produtos",{
                                id: item.id,
                                nome: item.nome
                            })
                        }}
                        >
                            {item.nome}
                        </Text> 
        
                        </View>
                        )
                    }
                    }
                    />
                    
            </View>
        )

        

                    


    
}


