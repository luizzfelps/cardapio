import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Alert, TextInput, Switch, NavigationContainer, Image } from "react-native"
import {Picker} from '@react-native-picker/picker'
import database from "../../config/firebaseconfig"
import styles from "./style"
import Icon from 'react-native-vector-icons/MaterialIcons'

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default function DetalhesEditar({ navigation, route }){
    const [state, setState] = useState({});
    const [nomeEditar, setNomeEdit] = useState(route.params.nome);
    const [valorEditar, setValorEdit] = useState(route.params.valor);
    const [imagem, setImagem] = useState(route.params.imagem);
    const [descricaoEditar, setDescricaoEdit] = useState(route.params.descricao)
    const [categoriaEditar, setCategoriaEditar] = useState (route.params.categoria)
    const [isEnabledEditar, setIsEnabledEdit] = useState(route.params.disponivel);

    const toggleSwitch = () => setIsEnabledEdit(previousState => !previousState);


    const idProduto = route.params.id

    const ref = database.collection("Produtos")
    const refCategorias = database.collection("Categorias")

    function editarProdutos(imagem,nomeEditar,valorEditar, descricaoEditar, isEnabledEditar, categoriaEditar, id){
       const unsubscribe = ref.doc(id).update({
            imagem: imagem,
            nome: nomeEditar,
            valor: valorEditar,
            descricao: descricaoEditar,
            disponivel: isEnabledEditar,
            categoria: categoriaEditar
        })
        return () => {
            unsubscribe();
            setState({});
          };
    }
    async function imagePickerCall(){
        if (Constants.platform.ios){
            const{status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

            if (status !== 'granted'){
                alert("Nós precisamos dessa permissão.");
                return;
            }
        }
    

    const data = await ImagePicker.launchImageLibraryAsync({});

    if ( data.cancelled){
        return;
    }

    if (!data.uri){
        return;
    }

    setImagem(data);
}

    const showAlert = () =>
        Alert.alert(
        "Confirma as alterações?",
        "",
        [
            {
            text: "Cancelar",
            style: "cancel",
            },
            {
                text:"Aceitar",
                onPress: () => {
                    editarProdutos(imagem, nomeEditar, valorEditar, descricaoEditar, isEnabledEditar, categoriaEditar,idProduto)
                    navigation.goBack()
                },
                style: "accept"
            }
        ],
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Editar Produtos</Text>
            </View>
                <Image 
                    source={{
                        uri: imagem
                        ? imagem.uri
                        : imagem.uri
                    }}
                    style={styles.prodImg}
                />
            <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
                <Text style={styles.textImage}>Editar Imagem</Text>
            </TouchableOpacity>
            

            <Text style={styles.text}>Nome</Text>
                <TextInput
                style={styles.inputText}
                onChangeText={setNomeEdit}
                value={nomeEditar}
            >
            </TextInput>
            <Text style={styles.text}>Descrição</Text>
                <TextInput
                style={styles.inputText}
                onChangeText={setDescricaoEdit}
                value={descricaoEditar}
            >
            </TextInput>
            <Text style={styles.text}>Valor</Text>
                <TextInput
                keyboardType={"numeric"}
                style={styles.inputText}
                onChangeText={setValorEdit}
                value={valorEditar}
            >
            </TextInput>
            {/* 
                <TextInput
                style={styles.inputText}
                onChangeText={setCategoriaEditar}
                value={categoriaEditar}
            >
            </TextInput> 
            */}
            <Text style={styles.text}>Categoria</Text>
            <Picker
                selectedValue={categoriaEditar}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setCategoriaEditar(itemValue)}
            >
                <Picker.Item label="Bebidas" value="Bebidas" />
                <Picker.Item label="Lanches" value="Lanches" />
                <Picker.Item label="Pratos" value="Pratos" />
                <Picker.Item label="Porções" value="Porções" />
            </Picker>
            <Text style={styles.text}>Disponível</Text>
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