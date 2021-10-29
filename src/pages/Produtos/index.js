import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "../Produtos/style"
const logo = require('../../../assets/logoVinland.png')

export default function Produtos({ navigation,route }){
    const [produtos, setProdutos] = useState([])
    let nomeCategoria = route.params.nome
    const ref = database.collection('Produtos').where("categoria", "==", nomeCategoria)
    useEffect(() =>{
        nomeCategoria = route.params.nome
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
            <View style ={styles.header}>
                <Image source= { logo } style={styles.headerLogo}/>
                <Text style={styles.headerText}>VINLAND BAR</Text>
            </View>
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
                    <Image
                        style={{ width: 150, height: 100, borderRadius: 10, margin: 5}}
                        source={{
                             uri: item.imagem.uri,
                            }}
                    />
                    <Text style={styles.texto}>{item.nome}</Text>
                    <Text></Text>
                    <Text></Text>
                    <Text style={styles.texto}>R$ {item.valor}</Text>
                    </View>
                 
                    </TouchableOpacity>
                    
                    </View>
                    )
                }
                }
                />
        </View>
    )
}