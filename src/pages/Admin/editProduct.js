import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Alert, TextInput, Switch, NavigationContainer } from "react-native"

import database from "../../config/firebaseconfig"
import styles from "./style"


export default function DetalhesEditar({ navigation, route }){
    const [state, setState] = useState({})
    const [nomeEditar, setNomeEdit] = useState(route.params.nome)
    const [valorEditar, setValorEdit] = useState(route.params.valor)
    const [descricaoEditar, setDescricaoEdit] = useState(route.params.descricao)
    const [isEnabledEditar, setIsEnabledEdit] = useState(route.params.disponivel);
    const toggleSwitch = () => setIsEnabledEdit(previousState => !previousState);
    const idProduto = route.params.id
    idCategoriaAdmin = route.params.idCategoriaAdmin
    nomeCategoriaAdmin = route.params.nomeCategoriaAdmin
    const ref = database.collection("Categorias").doc(idCategoriaAdmin).collection(nomeCategoriaAdmin)

    function editarProdutos(nomeEditar,valorEditar, descricaoEditar, isEnabledEditar, id){
        ref.doc(id).update({
            nome: nomeEditar,
            valor: valorEditar,
            descricao: descricaoEditar,
            disponivel: isEnabledEditar
        })
        setState({});
        navigation.navigate("ProdutosAdmin",{
            id: idCategoriaAdmin,
            nome: nomeCategoriaAdmin
        })
        
    }
    
    const showAlert = () =>
        Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
            text: "Cancel",
            style: "cancel",
            },
            {
                text:"Accept",
                onPress: () => editarProdutos(nomeEditar, valorEditar, descricaoEditar, isEnabledEditar,idProduto),
                style: "accept"
            }
        ],
    );
    

  
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
                 onPress={showAlert}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}