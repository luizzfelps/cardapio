import React, { useState, useEffect } from "react"
import {ListView, View, Text, TouchableOpacity, FlatList, Touchable, Modal, Alert, Pressable, Button} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from "@expo/vector-icons"
import styles from "../pages/style"
import {useCart} from '../context/cart'


export default function Detalhes({navigation, route}){
    const [modalVisible, setModalVisible] = useState(false);
    const {add, remove, cart, totalValue} = useCart()
    const itemsPrice = cart.reduce((a, c) => a + c.valor * c.qty, 0);
    const totalPrice = itemsPrice
    return(
        <View style={styles.centeredView}>
            <FlatList
            data={cart}
            contentContainerStyle={{flex: 1, width:'100%', padding: 10}}
            renderItem={({item, index}) =>{
                return(
                    <View style={styles.Produtos}>
                        <TouchableOpacity 
                        style={styles.excluirProduto}
                        onPress={() => remove(item)}>
                            <FontAwesome
                            name="minus-square"
                            size={23}
                            color="#4682B4">
                            </FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.addProduto}>{item.qty}</Text>
                        <TouchableOpacity 
                         style={styles.addProduto}
                        onPress={() => add(item)}>
                            <FontAwesome
                            name="plus-square"
                            size={23}
                            color="#4682B4">
                            </FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.ProdutosDescricao}>
                            {item.nome},{item.qty * item.valor}
                        </Text>
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
                                <Text style={styles.modalText}>Revisando seu pedido!</Text>
                                <FlatList
                                    data={cart}
                                    renderItem={({item}) => <Text style={styles.item}>{item.nome}, {item.qty}</Text>}
                                  />
                                <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                                >
                                <Text style={styles.textStyle}>Finalizar R${totalPrice}</Text>
                                </Pressable>
                            </View>
                            </View>
                        </Modal>
                    </View>
                )
            }}
            keyExtractor={(item)=> item.id}
            >
            </FlatList>
            <Text>Valor: {totalPrice}</Text>
            <Button title="Finalizar pedido" onPress={() => setModalVisible(true)}></Button>
        </View>
    )
}
