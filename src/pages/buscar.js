import React, { useState, useEffect } from "react"
import { SearchBar } from 'react-native-elements';
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable,Image, TextInput} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "../pages/Categorias/style";
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"
import database from "../config/firebaseconfig"
import { FontAwesome } from "@expo/vector-icons"


export default function Buscar({navigation}){

        const [buscaItem, setBuscaItem] = useState();
        const [produtos, setProdutos] = useState([]);
        const [originalProdutos, setOriginalProdutos] = useState([]);

        useEffect(() =>{
           const unsubscribe = database.collection("Produtos").onSnapshot((query)=>{
                const list = []
                query.forEach((doc)=>{
                    list.push({...doc.data(), id: doc.id})
                })
                setProdutos(list);
                setOriginalProdutos(list);
                return () => {
                    // Unmouting
                    unsubscribe();
                  };
            })
        }, [])
        //pesquisa em cima de nomes e categorias
        function searchText(t) {
            let arr = JSON.parse(JSON.stringify(originalProdutos));
            setProdutos(arr.filter((d) => d.nome.includes(t) || d.categoria.includes(t)));
        };

        const ListaProdutos = () =>{
            return (
                <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={produtos}
                        ListFooterComponent={<View style={{height: 20}}/>}
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
                                    <Text style={{fontSize: 14, color: '#ccc', marginTop: 2}}>{item.categoria}</Text>
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
                        
            );
        }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.header2}> 
                <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Pesquisa</Text>
            </View>
        <View style={styles.container}>
           
            <View
                style={{
                    marginTop: 40,
                    flexDirection: 'row',
                    paddingHorizontal: 20
                }}> 

                <View style={styles.inputContainer}>
                    <Icon name="search" size={28}/>
                    <TextInput style={{flex: 1, fontSize: 18}} 
                    placeholder="Pesquise por comida"
                    placeholderTextColor ='#888'
                    onChangeText={(t) => searchText(t)}
                    />
                </View>
               
            </View>
           
            <View style={{flex: 1}}>
                <ListaProdutos />
            </View>
    </View>
    </SafeAreaView>
        )

        

                    


    
}


