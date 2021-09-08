import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Button} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from "@expo/vector-icons"
import styles from "../pages/style"
import {useCart} from '../context/cart'


export default function Detalhes({navigation, route}){
    const {add, remove, cart, totalValue} = useCart()
    const itemsPrice = cart.reduce((a, c) => a + c.valor * c.qty, 0);
    const totalPrice = itemsPrice
    return(
        <View style={{flex: 1}}>
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
                            color="#F92E6A">
                            </FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.addProduto}>{item.qty}</Text>
                        <TouchableOpacity 
                         style={styles.addProduto}
                        onPress={() => add(item)}>
                            <FontAwesome
                            name="plus-square"
                            size={23}
                            color="#F92E6A">
                            </FontAwesome>
                        </TouchableOpacity>
                        <Text style={styles.ProdutosDescricao}>
                            {item.nome},{item.qty * item.valor}
                        </Text>
                        
                    </View>
                )
            }}
            keyExtractor={(item)=> item.id}
            >
            </FlatList>
            <Text>Valor: {totalPrice}</Text>
        </View>
    )
}
