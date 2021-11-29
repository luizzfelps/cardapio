import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Alert, ScrollView} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'

import database from "../../config/firebaseconfig"
import styles from "./style"

export default function ProdutosAdmin({ navigation, route }){
    const [state, setState] = useState({});
    const [produtos, setProdutos] = useState([])
    idCategoriaAdm = route.params.idCategoria
    nomeCategoria = route.params.nome
    const ref = database.collection("Produtos")

    function excluirProduto(id){
        ref.doc(id).delete()
        return () => {
            setState({});
          };
    }
   
    useEffect(() =>{
        nomeCategoria = route.params.nome
        const unsubscribe = ref.where("categoria", "==", nomeCategoria).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setProdutos(list)
            return () => {
                // Unmouting
                unsubscribe();
              };
        })
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Produtos</Text>
            </View>
            <Text style={{marginLeft: 5,fontWeight: 'bold', fontSize: 23}}>{nomeCategoria}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={produtos}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                        <View style={styles.cardView}>
                            
                        <TouchableOpacity
                            style={styles.excluirProduto}
                            onPress={() => {
                                excluirProduto(item.id)
                            }}
                        >
                            <FontAwesome
                                name="minus-square"
                                size={23}
                                color="#F9813A"
                            >                            
                            </FontAwesome>                   
                        </TouchableOpacity>
                        
                    <Text
                    style={{color:'#000',width:"98%", marginLeft: 10, fontWeight: 'bold', fontSize: 20}}
                    onPress={()=>{
                        navigation.navigate("DetalhesEditar",{
                            id: item.id,
                            nome: item.nome,
                            valor: item.valor,
                            descricao: item.descricao,
                            disponivel: item.disponivel,
                            categoria: item.categoria,
                            imagem: item.imagem,
                            idCategoriaAdm,
                            nomeCategoria
                        })
                    }}
                    >
                        {item.nome}
                    </Text>
                    </View>

                    </View>
                    )
                }
                }
                />
            <TouchableOpacity 
                style={styles.newProduct}
                onPress={() =>{
                    navigation.navigate("NovoProduto",{
                        idCategoriaAdm,
                        nomeCategoria
                    })
                }}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}