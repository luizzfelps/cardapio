import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "../style"
import {useCart} from '../../context/cart'

export default function Categorias({ navigation }){
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
        <FlatList
            showsVerticalScrollIndicator={false}
            data={categorias}
            renderItem={( { item } )=>{
                return(
                <View style={styles.Produtos}>
                <Text
                style={styles.ProdutosDescricao}
                onPress={()=>{
                    navigation.navigate("Produtos",{
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
function IconWithBadge(){
    const {cart} = useCart()

    return(
      <View style={{width:24, height:24, margin:5, alignItems: 'center', justifyContent:'center'}}>
        <Text>{Object.keys(cart).length}</Text>
      </View>
    )
  }