import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../config/firebaseconfig"
import styles from "./style"


export default function Comanda({ navigation,route }){
    const [pedidosLista, setPedidosLista] = useState([])
    const [pedidos, setPedido] = useState([])
    const [idPedidos, setIdPedidos] = useState([])

    refPedidos = database.collection("Pedidos")

    refNaoPagos = refPedidos.where("pago", "==", false)

    useEffect(() =>{
        refNaoPagos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidosLista(list)
        })
    }, [])


 

    function pagamento(){
        pedidosLista.map((itens)=>{
            refPedidos.doc(itens.id).update({
                pago: true
            })
        })
    }    

    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
             <View style={styles.cartHeader}> 
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Comanda</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pedidosLista} 
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.prod}>
                            {item.cart.map((item) =>{
                                return(
                                    <View style={styles.cartCard}>
                                        <View style={{
                                            height: 100,
                                            marginLeft: 10,
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                            flex: 1
                                        }}>
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>Nome do Produto: </Text>
                                            <Text style={{color: '#000', fontSize: 16}}>{item.nome}</Text>
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>Quantidade: </Text> 
                                            <Text style={{color: '#000', fontSize: 16}}>{item.qty}</Text>      
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>ID do pedido: </Text> 
                                            <Text style={{color: '#000', fontSize: 16}}>{item.id}</Text>         
                                        </View>
                                    </View>
                                )
                            })}
                            {/* <Text>{item.cart[0].nome}</Text> */}
                           
                        </View>
                        )
                        
                    }
                    }
                    ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                    ListFooterComponent= {() =>(

                    
                    <View>
                        <TouchableOpacity
                            style={styles.btnCart}
                            onPress={() => pagamento()}
                        >
                            <Text style = {styles.text}>Fechar Comanda</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                    />
            </View>
            
        </SafeAreaView>
    )
}