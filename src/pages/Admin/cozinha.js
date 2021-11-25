import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"
import { Button } from "react-native-elements/dist/buttons/Button"


export default function CozinhaAdmin({ navigation }){
    const [categorias, setCategorias] = useState([])

    useEffect(() =>{
        database.collection("Categorias2").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setCategorias(list)
        })
    }, [])
    return(
        <View style={styles.container}>
            <Text>Oi</Text>
        </View>

        
    )


}