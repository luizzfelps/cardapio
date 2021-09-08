import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function Produtos({ navigation,route }){
    const [produtos, setProdutos] = useState([])
    idCategoria = route.params.id
    nomeCategoria = route.params.nome
    const ref = database.collection('Categorias').doc(idCategoria).collection(nomeCategoria)

    useEffect(() =>{
        ref.where("disponivel", "==", true).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setProdutos(list)
        })
    }, [])

    return(
        <View style={styles.container}>
            <Text>{nomeCategoria}</Text>
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
                            nome: item.nome,
                            valor: item.valor,
                            descricao: item.descricao,
                            produtoBruto: item
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