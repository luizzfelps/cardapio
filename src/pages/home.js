import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import database from "../config/firebaseconfig"
import styles from "./style.js"
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"



export default function Home({ navigation }){

    return(
        <View style={styles.container}>
            
            <TouchableOpacity>
                <Text style={styles.cardapio}
                onPress={()=>{
                        navigation.navigate("Categorias")
                    }}>
                    Cardapio</Text>
            </TouchableOpacity>
            <View style={styles.container2}>
            <TouchableOpacity>
                <Text style={styles.cardapio}
                onPress={()=>{
                        navigation.navigate("CategoriasAdmin")
                    }}>
                    Admin</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
