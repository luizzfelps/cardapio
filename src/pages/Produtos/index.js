import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'
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
            <View style={styles.header}> 
                <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Produtos</Text>
            </View>
            <View style ={styles.logo}>
                <Image source= { logo } style={styles.headerLogo}/>
                <Text style={styles.headerText}>VINLAND BAR</Text>
            </View>
            <Text style={styles.title}>{nomeCategoria}</Text>
            <FlatList 
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={produtos}
                renderItem={( { item } )=>{
                    return(
                    <View style={styles.Produtos}>
                    <TouchableOpacity
                    style={styles.ProdutosDescricao}
                    onPress={()=>{
                        navigation.navigate("Detalhes",{
                            id: item.id,
                            nome: item.nome,
                            imagem: item.imagem,
                            valor: item.valor,
                            descricao: item.descricao,
                            produtoBruto: item,
                            
                        })
                    }}
                        >
                    <View style={styles.prod}>
                            <View style={{alignItems: 'center', top: -40}}>
                                <Image
                                    style={{ width: 120, height: 120, borderRadius: 40}}
                                    source={{
                                    uri: item.imagem.uri,
                                    }}
                                />
                            </View>
                            <View style={{marginHorizontal: 20}}>
                                <Text style={styles.texto}>{item.nome}</Text>
                                <Text style={{fontSize: 14, color: 'ccc', marginTop: 2}}>{item.nome}</Text>
                            </View>
                            <View style={{
                                marginTop:10, 
                                marginHorizontal:20, 
                                flexDirection: 'row', 
                                justifyContent: 'space-between'
                                }}>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>R$ {item.valor}</Text>
                                
                                    <View style={styles.verDetalhes}> 
                                    <Icon name = "description" size={20} color= '#fff' />
                                    </View>
                                
                            </View>
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