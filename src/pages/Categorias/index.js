import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image, ScrollView} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'
import database from "../../config/firebaseconfig"
import styles from "./style"
import {useCart} from '../../context/cart'
import { TextInput } from "react-native-gesture-handler"


const logo = require('../../../assets/logoVinland.png')

export default function Categorias({ navigation }){
    const [categorias, setCategorias] = useState([])
    const [produtos, setProdutos] = useState([])
    

    useEffect(() =>{
        database.collection("Categorias2").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setCategorias(list)
        })
    }, [])

    useEffect(() =>{
        database.collection("Produtos").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setProdutos(list)
        })
    }, [])

    const ListaCategorias = () => {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.lista}
                data={categorias}
                renderItem={( { item } )=>{
                    return(
                   
                    <TouchableOpacity  activeOpacity={0.8}
                    onPress={()=>{
                        navigation.navigate("Produtos",{
                            nome: item.nome,
                            
                        })
                    }}>
                        <View style={styles.btnCategoria}>
                            <View style={styles.categoriaIcone}>
                            <Image  source={{
                              uri: item.imagem
                            }} style={{height: 30, width: 30, resizeMode: 'cover'}}/>
                            </View>
                            <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft:10, color: '#fff'}}  >
                                {item.nome}
                            </Text> 
                        </View>
                    </TouchableOpacity>
                    )
                }
                }

            />
        );
    }
    const ListaProdutos = () =>{
        return (
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
        );
    }

    
    
    return(
        
        <View style={styles.container}>
           <View style ={styles.header}>
                <Image source= { logo } style={styles.headerLogo}/>
                <Text style={styles.headerText}>VINLAND BAR</Text>
            </View>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 5}}> Olá</Text>
            <Text style={styles.title}> O que voce Deseja hoje ?</Text>

            <View
                style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    paddingHorizontal: 20
                }}> 

                <View style={styles.inputContainer}>
                    <Icon name="search" size={28}/>
                    <TextInput style={{flex: 1, fontSize: 18}} placeholder="Pesquise por comida"/>
                </View>
                <TouchableOpacity>
                <View style={styles.orderBtn}>
                    <Icon name="tune" size={28} color={"#E5E7EB"} />
                </View>
                </TouchableOpacity>
            </View>
            <View>
                <ListaCategorias />
            </View>
            <View>
            <ListaProdutos />
            </View>
            
             
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