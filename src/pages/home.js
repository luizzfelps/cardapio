import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image, SafeAreaViewBase, StatusBar, Button, Alert} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { FontAwesome } from "@expo/vector-icons"
import database from "../config/firebaseconfig"
import styles from "./style.js"
import CartProvider from "../context/cart"
import Carrinho from "./carrinho"
import Categorias from "./Categorias/index"


export default function Home({ navigation }){

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: '#333'}}>
            <StatusBar backgroundColor = "#333" barStyle="default" />
        <View style={styles.container}>

            <Image source={require("../../assets/imgBackground.jpeg")} style={styles.img}/>

            <TouchableOpacity style={styles.btnAdm}
            onPress={()=>{
                navigation.navigate("CategoriasAdmin")
            }}>
                <Text 
                style={styles.adm}>
                    <FontAwesome 
                name="unlock"
                size={40}
                color="#000"
                />
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnCardapio} 
            onPress={()=>{
                navigation.navigate("Categorias")
                activeOpacity= 0.7
            }}
            >
                <Text 
                style={styles.cardapio}>
                    <FontAwesome 
                name="bars"
                size={50}
                color="#fff"
                />
                </Text>
               
            </TouchableOpacity>

        </View>
        </SafeAreaView>
    )
}
