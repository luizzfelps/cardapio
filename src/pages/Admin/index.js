import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function Produtos({ navigation }){
    const [produtos, setProdutos] = useState([])

    function excluirProduto(id){
        database.collection("Produtos").doc(id).delete()
    }
    useEffect(() =>{
        database.collection("Produtos").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setProdutos(list)
        })
    }, [])
    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                        <TouchableOpacity
                            style={styles.excluirProduto}
                            onPress={() => {
                                excluirProduto(item.id)
                            }}
                        >
                            <FontAwesome
                                name="minus-square"
                                size={23}
                                color="#F92E6A"
                            >                            
                            </FontAwesome>                   
                        </TouchableOpacity>
                    <Text
                    style={styles.ProdutosDescricao}
                    onPress={()=>{
                        navigation.navigate("EditProduct",{
                            id: item.id,
                            nome: item.Nome,
                            descricao: item.Descricao,
                            valor: item.Valor,
                            disponivel: item.Disponivel
                        })
                    }}
                    >
                        {item.Nome}
                    </Text> 

                    </View>
                    )
                }
                }
                />
            {/* <TouchableOpacity style={styles.buttonDetalhes}
            onPress={()=> navigation.navigate("Detalhes")}>
                <Text style={styles.iconButton}>Produto</Text>
            </TouchableOpacity> */}
            <TouchableOpacity 
                style={styles.newProduct}
                onPress={() =>{
                    navigation.navigate("NewProduct")
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}