import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, TextInput, Switch, goBack,ScrollView, Image} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import {Picker} from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Axios from "axios";

import database from "../../config/firebaseconfig"
import styles from "./style"
import { CardStyleInterpolators } from "@react-navigation/stack"

export default function newProduct({navigation, route}){
    const [state, setState] = useState({})
    const [nome, setNome] = useState(null)
    const [valor, setValor] = useState(null)
    const [descricao, setDescricao] = useState(null)
    const [categoria, setCategoria] = useState(null)
    const [imagem, setImagem] = useState()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    idCategoriaAdmin = route.params.idCategoriaAdmin
    nomeCategoria = route.params.nomeCategoria
    const ref = database.collection("Produtos")

    function adicionarProduto(nome, valor, descricao, isEnabled, categoria, imagem){
        ref.add({
            nome: nome,
            valor: valor,
            descricao: descricao,
            disponivel: isEnabled,
            categoria: categoria,
            imagem: imagem
        })

        return () => {
            setState({});
          };
    }
    async function imagePickerCall(){
        if (Constants.platform.ios){
            const {status} = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
            
            if( status !== 'granted'){
                alert("Nós precisamos dessa permissão.");
                return;
            }
        }

        const data = await ImagePicker.launchImageLibraryAsync({});

        if (data.cancelled){
            return;
        }

        if(!data.uri){
            return;
        }
        setImagem(data);
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}> 
                <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
                <Text style={{fontSize:20, fontWeight: 'bold', color: '#000'}}>Novo Produto</Text>
            </View>

            <Text style={styles.text}>Nome</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Macarrão a bolonhesa"
                onChangeText={setNome}
                value={nome}
            >
            </TextInput>
            <Text style={styles.text}>Descrição</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Massa spaguetti com molho de tomate da casa e..."
                onChangeText={setDescricao}
                value={descricao}
            >
            </TextInput>
            <Text style={styles.text}>Valor</Text>
                <TextInput
                keyboardType={"numeric"}
                style={styles.inputText}
                placeholder="Ex: 20"
                onChangeText={setValor}
                value={valor}
            >
                
            </TextInput>
           
            {/* <Text style={styles.text}>Categoria</Text>
                <TextInput
                style={styles.inputText}
                placeholder="Ex: Bebidas"
                onChangeText={setCategoria}
                value={categoria}
            >
            </TextInput> */}

            <Text style={styles.text}>Categoria</Text>
            <Picker
                selectedValue={categoria}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
            >
                <Picker.Item label="Bebidas" value="Bebidas" />
                <Picker.Item label="Lanches" value="Lanches" />
                <Picker.Item label="Pratos" value="Pratos" />
                <Picker.Item label="Porções" value="Porções" />
            </Picker>
            
            <Image
                source={{
                    uri: imagem
                    ? imagem.uri
                    :'https://www.pickwickoutpost.com/Content/commerce-icons/menu-item-placeholder.png'
                }}
                style={styles.prodImg}
            />
            <TouchableOpacity style={styles.button} onPress={imagePickerCall}>
                <Text style={styles.textImage}> Adicionar Imagem</Text>
            </TouchableOpacity>
            
            
            <Text style={styles.text}>Disponível</Text> 
                <Switch
                    trackColor={{ false: "#767577", true: "#ffa773" }}
                    thumbColor={isEnabled ? "#F9813A" : "#ff5f00"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
               
               
            <TouchableOpacity
                style={styles.buttonNewProduct}
                onPress={()=>{
                    adicionarProduto(nome, valor, descricao, isEnabled, categoria, imagem)
                    navigation.goBack()
                }}
            >
                <Text style={styles.iconButton}>Adicionar</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}