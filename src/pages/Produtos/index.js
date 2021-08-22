import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function Produtos({ navigation }){
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
    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                    <Text
                    style={styles.ProdutosDescricao}
                    onPress={()=>{
                        navigation.navigate("Detalhes",{
                            id: item.id,
                            name: item.Nome,
                            description: item.Descricao,
                            value: item.Valor
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


        </View>
    )
}