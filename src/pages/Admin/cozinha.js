import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchabl, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import styles from "../style"
import { Button } from "react-native-elements/dist/buttons/Button"
import database from "../../config/firebaseconfig"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function CozinhaAdmin({ navigation }){
    const [pedidos, setPedidos] = useState([]);
    const [state, setState] = useState({});
    const [mesa, setMesa] = useState([]);
    const refPedidos = database.collection("Pedidos").where("cozinha", "==", true)
    const listaMesas = []

    useEffect(() =>{
        const unsubscribe = refPedidos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidos(list)
            return () => {
                // Unmouting
                unsubscribe();
              };
        })
    }, [])


    // function marcaComoPronto(item){
    //     // for(let i = 0; i < pedidos.length; i++){
    //     //     database.collection("Pedidos").doc(pedidos[i].id).update({
    //     //         cozinha: false
    //     //     })
    //     //     return () => {
    //     //         setState({});
    //     //       };
    //     // }
    // }

    
    function marcaComoPronto(idPedido){
        database.collection("Pedidos").doc(idPedido).update({
            cozinha: false
        })
        return () => {
            unsubscribe();
            setState({});
        };
    }

    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <FlatList
            data={pedidos}
            contentContainerStyle={{paddingBottom:80}}
            renderItem={({item, index}) =>{
                return(
                    <View style={styles.centeredView}>
                        {item.cart.map((itens) =>{
                        return(
                        <View style={styles.cartCard} key={uuidv4()}>
                            <Image source={itens.imagem} style={{height: 90, width: 90, borderRadius: 8}}/>
                            <View style={{
                                height: 100,
                                marginLeft: 10,
                                justifyContent: 'center',
                                paddingVertical: 20,
                                flex: 1
                            }}>
                                <TouchableOpacity>
                                <Text style={{fontWeight: 'bold', color: '#000', fontSize: 16}}>
                                    {itens.nome}
                                </Text>
                                <Text style={{fontWeight: 'bold', color: '#A9A9A9', fontSize: 16}}>
                                    Mesa {item.mesa}
                                </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight: 20, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{itens.qty}</Text>
                            </View>
                        <TouchableOpacity
                        activeOpacity = {0.8}
                        style={{backgroundColor:'#F9813A', width:30, borderRadius:30, alignItems:'center'}}
                        onPress={() => {marcaComoPronto(item.id)}}>
                            <FontAwesome
                            name="check-circle"
                            size={28}
                            color="#fff"
                            textAlign= 'center'>
                            </FontAwesome>
                        </TouchableOpacity>
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