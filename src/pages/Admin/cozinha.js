import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchabl, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import styles from "../style"
import { Button } from "react-native-elements/dist/buttons/Button"
import database from "../../config/firebaseconfig"

export default function CozinhaAdmin({ navigation }){
    const [pedidos, setPedidos] = useState([]);

    refPedidos = database.collection("Pedidos").where("cozinha", "==", true)

    useEffect(() =>{
        refPedidos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidos(list)
        })
    }, [])

    



    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <FlatList
            data={pedidos}
            contentContainerStyle={{paddingBottom:80}}
            renderItem={({item, index}) =>{
                return(
                    <View style={styles.centeredView}>
                        {item.cart.map((item) =>{
                        return(
                        <View style={styles.cartCard}>
                            <Image source={item.imagem} style={{height: 90, width: 90, borderRadius: 8}}/>
                            <View style={{
                                height: 100,
                                marginLeft: 10,
                                justifyContent: 'center',
                                paddingVertical: 20,
                                flex: 1
                            }}>
                                <Text style={{fontWeight: 'bold', color: '#000', fontSize: 16}}>
                                    
                                    {item.nome}
                                    <TouchableOpacity>Status</TouchableOpacity>
                                </Text>
                            </View>
                            <View style={{marginRight: 20, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.qty}</Text>
                            </View>
                        </View>
                            
                        )
                    })}
                    </View>
                )
            }}
            keyExtractor={(item)=> item.id}
            // ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            // ListFooterComponent={() =>(
            //     <View>
            //         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
            //         <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Valor Total: </Text>
            //         <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}> R$ {totalPrice} </Text>
            //         </View>
            //         <TouchableOpacity 
            //         style={styles.btnCart}
            //         onPress={() => setModalVisible(true)}>
            //             <Text style={styles.text}>
            //                 Finalizar pedido
            //             </Text>
            //         </TouchableOpacity>
            //     </View>
            // )}
            >
            
            </FlatList>
            
            
        
        </SafeAreaView>
    )


}