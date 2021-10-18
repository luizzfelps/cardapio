import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function Produtos({ navigation,route }){
    const [produtos, setProdutos] = useState([])
    let nomeCategoria = route.params.nome
    const ref = database.collection('Produtos')
    useEffect(() =>{
        nomeCategoria = route.params.nome
        ref.where("categoria", "==", nomeCategoria).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setProdutos(list)
        })
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{nomeCategoria}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                    <TouchableOpacity style={styles.ProdutosDescricao}
                    onPress={()=>{
                        navigation.navigate("Detalhes",{
                            id: item.id,
                            nome: item.nome,
                            imagem:item.imagem,
                            valor: item.valor,
                            descricao: item.descricao,
                            imagem: item.imagem,
                            produtoBruto: item
                            
                        })

                    }}
                        >
                    <View style={styles.prod}>
                    <Text style={styles.texto}>{item.nome}</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text style={styles.texto}>R$ {item.valor}</Text>
                    </View>
                    <Image
                        style={{ width: 85, height: 85, borderRadius: 5, margin: 5}}
                        source={{
                             uri: item.imagem,
                            }}
                    />
                    </TouchableOpacity>
                    
                    </View>
                    )
                }
                }
                />
        </View>
    )
}