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
                <View style={{flex: 1, marginBottom: 100, justifyContent: 'flex-end'}}>
                <Text style={styles.title}>COZINHA E REGISTROS</Text>

                <TouchableOpacity 
                
                style={styles.btnCozinha}
                    onPress={() => {navigation.navigate("Cozinha")}}>
                    
                    <Text style={{fontWeight:'bold', fontSize: 15, color: '#fff'}}>Cozinha</Text>
                     
                </TouchableOpacity>
                </View>
        </View>

        
    )

}