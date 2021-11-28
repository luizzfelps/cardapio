import React, { useState, useEffect } from "react"
import {Dimensions,SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image, ScrollView} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/MaterialIcons'
import database from "../../config/firebaseconfig"
import styles from "./style"
import {useCart} from '../../context/cart'
import { TextInput } from "react-native-gesture-handler"
const screenHeight = Dimensions.get('window').height -100


const logo = require('../../../assets/logoVinland.png')

export default function Categorias({ navigation, route }){
    const {add} = useCart();
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [originalProdutos, setOriginalProdutos] = useState([]);
    

    

    const cliqueOrdenar = () => {
        let newProdutos = [...produtos]

        //metodo mais simples
        newProdutos.sort((a, b) => (a.nome > b.nome)? 1 : (b.nome > a.nome)? -1 : 0);
    
        //Outro metodo 
       /*newProdutos.sort((a , b) =>{
            if(a.nome > b.nome) {
                return 1;
            } else{
                if(b.nome > a.nome){
                    return -1;
                } else{
                    return 0;
                }
            }
        });*/
        setProdutos(newProdutos);

    };
//pesquisa em cima de nomes e categorias
    function searchText(t) {
        let arr = JSON.parse(JSON.stringify(originalProdutos));
        setProdutos(arr.filter((d) => d.nome.includes(t) || d.categoria.includes(t)));
    };

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
            setProdutos(list);
            setOriginalProdutos(list);
        })
    }, [])

//lista de categorias
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
                            nome: item.nome
                            
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
// lista de produtos
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

    
    
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
                    <TextInput style={{flex: 1, fontSize: 18}} 
                    placeholder="Pesquise por comida"
                    placeholderTextColor ='#888'
                    onChangeText={(t) => searchText(t)}
                    />
                </View>
                <TouchableOpacity onPress={cliqueOrdenar}>
                <View style={styles.orderBtn}>
                    <Icon name="tune" size={28} color={"#fff"} />
                </View>
                </TouchableOpacity>
            </View>
            <View>
                
                <ListaCategorias />
            </View>
            <View style={{flex: 1}}>
            <ListaProdutos />
            </View>
            
            
    </View>
    </SafeAreaView>
    
    
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