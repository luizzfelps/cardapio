import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import database from "../config/firebaseconfig"
import styles from "./style.js"
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"


export default function Buscar({navigation}){
    return (
        <View>
            <TextInput style={styles.input}/>




        </View>
    )
}

