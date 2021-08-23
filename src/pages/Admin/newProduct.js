import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput, Switch} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"
import { CardStyleInterpolators } from "@react-navigation/stack"

export default function newProduct({navigation}){
    const [nome, setNome] = useState(null)
    const [valor, setValor] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    function adicionarProduto(){
        database.collection("Produtos").add({
            Nome: nome,
            Valor: valor,
            Descricao: descricao,
            Disponivel: isEnabled
        })
        navigation.navigate("Admin")
    }

    return (
        <View style={styles.container}>
            <Text>Nome</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Macarrão a bolonhesa"
                onChangeText={setNome}
                value={nome}
            >
            </TextInput>
            <Text>Descrição</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Massa spaguetti com molho de tomate da casa e..."
                onChangeText={setDescricao}
                value={descricao}
            >
            </TextInput>
            <Text>Valor</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: 20"
                onChangeText={setValor}
                value={valor}
            >
            </TextInput>
            <Text>Disponível</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={()=>{
                    adicionarProduto()
                }}
            >
                <Text style={styles.iconButton}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}