import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput, Switch} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"
import { CardStyleInterpolators } from "@react-navigation/stack"


export default function DetalhesEditar({ navigation, route }){
    const [nomeEditar, setNomeEdit] = useState(route.params.nome)
    const [valorEditar, setValorEdit] = useState(route.params.valor)
    const [descricaoEditar, setDescricaoEdit] = useState(route.params.descricao)
    const [isEnabledEditar, setIsEnabledEdit] = useState(route.params.disponivel);
    const toggleSwitch = () => setIsEnabledEdit(previousState => !previousState);
    const idProduto = route.params.id

    function editarProdutos(Nome, Valor, Descricao, Disponivel, id){
        database.collection("Produtos").doc(id).update({
            Nome: nomeEditar,
            Valor: valorEditar,
            Descricao: descricaoEditar,
            Disponivel: isEnabledEditar
        })
    }
    return (
        <View style={styles.container}>
            <Text>Nome</Text>
                <TextInput
                style={styles.inputText}
                onChangeText={setNomeEdit}
                value={nomeEditar}
            >
            </TextInput>
            <Text>Descrição</Text>
                <TextInput
                style={styles.inputText}
                onChangeText={setDescricaoEdit}
                value={descricaoEditar}
            >
            </TextInput>
            <Text>Valor</Text>
                <TextInput
                style={styles.inputText}
                onChangeText={setValorEdit}
                value={valorEditar}
            >
            </TextInput>
            <Text>Disponível</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledEditar ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabledEditar}
                />
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={()=>{
                    editarProdutos(nomeEditar, valorEditar, descricaoEditar, isEnabledEditar, idProduto)
                }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}