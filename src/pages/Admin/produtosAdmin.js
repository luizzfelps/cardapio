import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function ProdutosAdmin({ navigation, route }){
    const [state, setState] = useState({})
    const [produtos, setProdutos] = useState([])
    idCategoriaAdmin = route.params.id
    nomeCategoriaAdmin = route.params.nome
    const ref = database.collection("Categorias").doc(idCategoriaAdmin).collection(nomeCategoriaAdmin)

    function excluirProduto(id){
        ref.doc(id).delete()
        setState({});
    }
   
    useEffect(() =>{
        database.collection('Categorias').doc(idCategoriaAdmin).collection(nomeCategoriaAdmin).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setProdutos(list)
        })
    }, [])
    return(
        <View style={styles.container}>
            <Text>{nomeCategoriaAdmin}</Text>
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
                        navigation.navigate("DetalhesEditar",{
                            id: item.id,
                            nome: item.nome,
                            valor: item.valor,
                            descricao: item.descricao,
                            disponivel: item.disponivel,
                            idCategoriaAdmin,
                            nomeCategoriaAdmin
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
            <TouchableOpacity 
                style={styles.newProduct}
                onPress={() =>{
                    navigation.navigate("NovoProduto",{
                        idCategoriaAdmin,
                        nomeCategoriaAdmin
                    })
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}