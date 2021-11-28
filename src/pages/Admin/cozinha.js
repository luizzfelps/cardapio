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
    const refPedidos = database.collection("Pedidos").where("cozinha", "==", true)

    useEffect(() =>{
        refPedidos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidos(list)
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

    
    function marcaComoPronto(){
     for (const id in pedidos) {
         if (Object.hasOwnProperty.call(pedidos, id)) {
             const element = pedidos[id];
             database.collection("Pedidos").doc(pedidos[id].id).update({
                 cozinha: false
                })
                return () => {
                    setState({});
                };
            }
        }
    }

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
                        <View style={styles.cartCard} key={uuidv4()}>
                            <Image source={item.imagem} style={{height: 90, width: 90, borderRadius: 8}}/>
                            <View style={{
                                height: 100,
                                marginLeft: 10,
                                justifyContent: 'center',
                                paddingVertical: 20,
                                flex: 1
                            }}>
                                <TouchableOpacity>
                                <Text style={{fontWeight: 'bold', color: '#000', fontSize: 16}}>
                                    {item.nome}
                                </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginRight: 20, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.qty}</Text>
                            </View>
                        <TouchableOpacity
                        activeOpacity = {0.8}
                        style={{backgroundColor:'#F9813A', width:30, borderRadius:30, alignItems:'center'}}
                        onPress={() => {marcaComoPronto()}}>
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