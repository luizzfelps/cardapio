import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../config/firebaseconfig"
import styles from "./style"

export default function Home({ navigation }){
    const [home, setHome] = useState([])

    useEffect(() =>{
        database.collection("Produtos").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setHome(list)
        })
    }, [])
    return(
        <View style={styles.container}>
            <FlatList/>
            <TouchableOpacity>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>


        </View>
    )
}