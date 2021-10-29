import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function CategoriasAdmin({ navigation }){
    const [categorias, setCategorias] = useState([])

    useEffect(() =>{
        database.collection("Categorias2").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setCategorias(list)
        })
    }, [])
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ADICIONAR PRODUTOS</Text>
            <FlatList
                style={styles.lista}
                showsVerticalScrollIndicator={false}
                data={categorias}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                    <Text
                    style={styles.ProdutosDescricao}
                    onPress={()=>{
                        navigation.navigate("ProdutosAdmin",{
                            idCategoria: item.id,
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