import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"
import { State } from "react-native-gesture-handler"

export default function Detalhes({navigation, route}){
    const id = useState(route.params.id)
    const nome = useState(route.params.nome)
    const descricao = useState(route.params.descricao)
    const valor = useState(route.params.valor)
    return(
       <View style={styles.container}>
           <Text></Text>
           <Text> </Text>
           <Text></Text>
       </View>
    )
}
