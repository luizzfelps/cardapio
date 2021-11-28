import React, { useState, useEffect, useRef } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, Image, StatusBar} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import database from "../config/firebaseconfig"
import styles from "./style.js"
import { TextInputMask } from "react-native-masked-text";
import { TextInput } from "react-native-gesture-handler"
import { FontAwesome } from "@expo/vector-icons"
import {useDados} from '../context/dados'


export default function Home({ navigation }){
    const { salvarDados} = useDados()
    const [isCardapioVisible, setIsCardapioVisible] = useState(false)
    const [isAdminVisible, setIsAdminVisible] = useState (false)
    const [cpfLista , setCpfLista] = useState({})
    const [cpf , setCpf] = useState('')
    const [nome, setNome] = useState('')
    const [mesa, setMesa] = useState('')
    // const [cadastrar, setCadastrar] = useState(true)
    // const [atualizar, setAtualizar] = useState(true)
    const cpfRef = useRef(null)
    const mesaRef = useRef(null)

    useEffect(() =>{
        database.collection("Clientes").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setCpfLista(list)
        })

    }, [])

    function cadastraCliente(){
        const unmaskedCPF = cpfRef?.current.getRawValue();
        var cadastrar = true
        var atualizar = true
        for(let i = 0; i < cpfLista.length; i++){
            if(cpfLista[i].cpf === unmaskedCPF){
                cadastrar = false
            }
        }
        if(cadastrar == true){
            database.collection("Clientes").add({
                cpf: cpfRef?.current.getRawValue(),
                nome: nome
            })
            return () => {
                setState({});
            };
        } 
    }
    
    // function cadastraCliente() {
    //     const unmaskedCPF = cpfRef?.current.getRawValue();
    //     cpfLista.filter(function(list){
    //         if(list.cpf === unmaskedCPF){
    //             return () => {
    //                 setState({});
    //               };
    //         }
    //         else{
    //             database.collection("Clientes").add({
    //             cpf: cpfRef?.current.getRawValue(),
    //             nome: nome
    //         })
    //         return () => {
    //             setState({});
    //           };
    //         }
    //     })
    // }
    
    function verificaCPF(){
        const unmaskedCPF = cpfRef?.current.getRawValue();
        const cpfIsValid = cpfRef?.current.isValid();
        const aMesa = mesaRef?.current.getRawValue();
        if(!unmaskedCPF){
            return alert("Preenche o campo CPF")
        }
        else if(!cpfIsValid){
            return alert("CPF inválido")
        }
        if(unmaskedCPF === '42068674882'){
            setIsAdminVisible(true)
            setIsCardapioVisible(true)
        }
        if(!nome){
            return alert("Preencha o campo nome")
        }
        if(nome.length <= 3){
           return  alert("O nome deve conter ao menos quatro caracteres")
        }        
        if(!aMesa){
            return alert("Preencha o campo mesa")
        }
        cadastraCliente()
        setIsCardapioVisible(true)
        salvarDados(unmaskedCPF, aMesa)
    }


    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.containerHome}>
                 <StatusBar backgroundColor = "#fff" barStyle="dark-content" />
                    <Image source={require("../../assets/imgBackground.jpeg")} style={styles.img}/>
                {isAdminVisible === true ? 
                (    
                <View style={{flex: 1,alignItems: 'center', margin:10, marginLeft: 350 }}>
                    <TouchableOpacity
                    style={styles.buttonsHome}
                    onPress={() => {navigation.navigate("CategoriasAdmin")}}>
                        <FontAwesome
                        name="user"
                        size={28}
                        color="#fff"
                        textAlign= 'center'>
                        </FontAwesome>
                    </TouchableOpacity>
                </View>
                ) : null }
                <Text
                    style={{
                    position: 'absolute',
                    marginTop: 500,
                    fontSize: 15,
                    textAlign: 'center',
                    color: "#fff",
                    }}>
                        AQUI VOCÊ ENCONTRA OS MELHORES E MAIS SABOROSOS ALIMENTOS!
                </Text>
                {isCardapioVisible === true ? 
                (
               <View style={{flex: 1, marginBottom: 60, justifyContent: 'flex-end'}}>
                <TouchableOpacity
                activeOpacity = {0.8}
                
                style={styles.btnCardapio}
                    onPress={() => {
                        navigation.navigate("Categorias")}}>
                    <Text style={styles.textHome}>Acessar o Cardapio  <Text></Text>
                        <FontAwesome 
                        name="list"
                        size={23}
                        color="#fff"
                        />
                    </Text>
                     
                </TouchableOpacity>
                </View>
                )
                :
                (
                    <View style={{ flex: 1, width: 350, marginTop: 200, marginBottom: 200,justifyContent: 'center', backgroundColor: '#F9813A', borderRadius: 8 }}>
                            <Text style={{fontSize:25, marginBottom:5, textAlign:"center"}}>Insira seu CPF</Text>
                            <TextInputMask
                                fontSize={20}
                                placeholder="999.999.999.99"
                                style={{backgroundColor:'#F0F8FF', height:35, width:200,justifyContent: 'center', textAlign:'center', borderRadius:5}}
                                type={'cpf'}
                                
                                options={{
                                     maskType:'BRL'
                                }}
                                value={cpf}
                                onChangeText={ text => setCpf(text)}
                                ref={cpfRef}
                            />
                            <Text style={{fontSize:25, marginBottom:5, textAlign:"center"}}>Insira seu Nome</Text>
                            <TextInput
                                fontSize={20}
                                placeholder="Fulano de Tal"
                                style={{backgroundColor:'#F0F8FF', height:35, width:200, textAlign:'center', borderRadius:5}}
                                value={nome}
                                onChangeText={ text => setNome(text)}
                            />
                            <Text style={{fontSize:25, marginBottom:5, textAlign:"center"}}>Insira o número da mesa</Text>
                            <TextInputMask
                                keyboardType="numeric"
                                fontSize={20}
                                placeholder="99"
                                style={{backgroundColor:'#F0F8FF', height:35, width:200, textAlign:'center', borderRadius:5}}
                                type={'custom'}
                                options={{
                                    mask: '99'
                                }}
                                value={mesa}
                                onChangeText={ text => setMesa(text)}
                                ref={mesaRef}

                            />
                            <TouchableOpacity
                             activeOpacity = {0.8}
                             style={{backgroundColor:'#F9813A', width:30, borderRadius:30, alignItems:'center'}}
                             onPress={() => {verificaCPF()}}>
                                     <FontAwesome 
                                     name="check-circle"
                                     size={30}
                                     color="#fff"
                                     />
                            </TouchableOpacity>
                    </View>
               )
               }
            </View>
            </SafeAreaView>
             )
            }
 
           

   
