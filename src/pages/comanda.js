import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../config/firebaseconfig"
import styles from "./style"


export default function Comanda({ navigation,route }){
    const [pedidosLista, setPedidosLista] = useState([])
    const [pedidos, setPedido] = useState([])

    refPedidos = database.collection("Pedidos")

    refNaoPagos = refPedidos.where("pago", "==", "false")

    useEffect(() =>{
        refNaoPagos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidosLista(list)
        })
    }, [])


// console.log(pedidosLista[0].cart[0].descricao);  


    return(
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={pedidosLista} 
                renderItem={( { item, index } )=>{
                    return(
                    <View style={styles.prod}>
                        {item.cart.map((item, key) =>{
                            
                            return(
                                <View>
                                    <Text>{item.nome}</Text>
                                    <Text>{item.qty}</Text>         
                                </View>
                            )
                        })}
                        {/* <Text>{item.cart[0].nome}</Text> */}
                    </View>
                    )
                }
                }
                />
                {/* <TouchableOpacity
                onPress={() => pagamento(item.id)}
                >
                </TouchableOpacity> */}
        </View>
    )
}