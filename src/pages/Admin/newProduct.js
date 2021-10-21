import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput, Switch, goBack} from "react-native"
import { FontAwesome } from "@expo/vector-icons"

import database from "../../config/firebaseconfig"
import styles from "./style"
import { CardStyleInterpolators } from "@react-navigation/stack"

export default function newProduct({navigation, route}){
    const [state, setState] = useState({})
    const [nome, setNome] = useState(null)
    const [valor, setValor] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [categoria, setCategoria] = useState(null)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    idCategoriaAdmin = route.params.idCategoriaAdmin
    nomeCategoria = route.params.nomeCategoria
    const ref = database.collection("Produtos")

    function adicionarProduto(nome, valor, descricao, isEnabled, categoria){
        ref.add({
            nome: nome,
            valor: valor,
            descricao: descricao,
            disponivel: isEnabled,
            categoria: categoria
        })

        return () => {
            setState({});
          };
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
            <Text>Categoria</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Bebidas"
                onChangeText={setCategoria}
                value={categoria}
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
                    adicionarProduto(nome, valor, descricao, isEnabled, categoria)
                    navigation.goBack()
                }}
            >
                <Text style={styles.iconButton}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}