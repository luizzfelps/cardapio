import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Modal,Image, Alert, Pressable, Button} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from "@expo/vector-icons"
import styles from "../pages/style"
import {useCart} from '../context/cart'
import {useDados} from '../context/dados'
import database from "../config/firebaseconfig"


export default function Detalhes({navigation, route}){
    const [state, setState] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const {add, remove, cart, clearCart} = useCart()
    const {cpfSessao, mesaSessao} = useDados()
    const itemsPrice = cart.reduce((a, c) => a + c.valor * c.qty, 0);
    const totalPrice = itemsPrice
    const refPedido = database.collection("Pedidos")

    function adicionarPedido(){
       const unsubscribe = refPedido.add({
            cart,
            cpf: cpfSessao,
            mesa: mesaSessao,
            pago: false,
            cozinha: true,
            valorTotalDoPedido: totalPrice
        })
        return () => {
            // Unmouting
            unsubscribe();
            setState({});
          };
    } 

    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
            <View style={styles.cartHeader}> 
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Carrinho</Text>
            </View>
            <FlatList
            data={cart}
            contentContainerStyle={{paddingBottom:80}}
            renderItem={({item, index}) =>{
                return(
                    <View style={styles.centeredView}>
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
                                </Text>
                                <Text style={{color: '#000', fontSize: 13}}>
                                    {item.descricao}
                                </Text>
                                <Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}}>
                                    R$ {item.valor}
                                </Text>
                            </View>
                            <View style={{marginRight: 20, alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.qty}</Text>
                            <View style={styles.addBtn}>
                            <TouchableOpacity 
                                onPress={() => remove(item)}>
                                <FontAwesome
                                    name="minus"
                                    size={25}
                                    color="#fff">
                                </FontAwesome>
                            </TouchableOpacity>
                                
                            <TouchableOpacity 
                                
                                onPress={() => add(item)}> 
                                <FontAwesome
                                    name="plus"
                                    size={25}
                                    color="#fff">
                                </FontAwesome>
                            </TouchableOpacity>
                            </View>
                            </View>
                        </View>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                            setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>
                                    Confirma o pedido?
                                </Text>
                                <Text style={styles.modalText}>
                                    O pedido será enviado para cozinha e ficará marcado na sua comanda, obrigado.
                                </Text>
                                {/* <FlatList
                                    data={cart}
                                    renderItem={({item}) => <Text>{item.nome}, {item.qty}</Text>}
                                  /> */}
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => {setModalVisible(!modalVisible), adicionarPedido(), clearCart()}}
                                >
                                <Text style={styles.textStyle}>Confirmar</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                    </View>
                )
            }}
            keyExtractor={(item)=> item.id}
            ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
            ListFooterComponent={() =>(
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15}}>
                    <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>Valor Total: </Text>
                    <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}> R$ {totalPrice} </Text>
                    </View>
                    <TouchableOpacity 
                    style={styles.btnCart}
                    onPress={() => setModalVisible(true)}>
                        <Text style={styles.text}>
                            Finalizar pedido
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            >
            
            </FlatList>
            
            
        
        </SafeAreaView>
    )
}
