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
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pedidosLista} 
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.prod}>
                            {item.cart.map((item) =>{
                                return(
                                    <View>
                                        <Text>{item.nome}</Text>
                                        <Text>{item.qty}</Text>      
                                        <Text>{item.id}</Text>         
    
                                    </View>
                                )
                            })}
                            {/* <Text>{item.cart[0].nome}</Text> */}
                           
                        </View>
                        )
                        
                    }
                    }
                    />
                     <View>
                        <TouchableOpacity
                            style={styles.btnCart}
                            onPress={() => pagamento()}
                        >
                            <Text>Fechar Comanda</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </SafeAreaView>
    )
}