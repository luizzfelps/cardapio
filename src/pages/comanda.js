import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Image, Alert} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import {useDados} from '../context/dados'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import database from "../config/firebaseconfig"
import styles from "./style"


export default function Comanda({ navigation,route }){
    const [state, setState] = useState({});
    const {cpfSessao} = useDados()
    const [pedidosLista, setPedidosLista] = useState([])
    const refPedidos = database.collection("Pedidos")
    const [valorTotal, setValorTotal] = useState()
    let soma1 = 0
    let soma2 = 0
    const refPedidosNaoPagos = database.collection("Pedidos").where("cpf", "==", cpfSessao).where("pago", "==", false)

    useEffect(() =>{
        refPedidosNaoPagos.onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id}) 
            })
            setPedidosLista(list)
        })
    }, [])
    useEffect(()=>{
        pedidosLista.forEach((itens)=>{
            soma2 = soma1 += itens.valorTotalDoPedido
            setValorTotal(soma2)
        })
    })

    function pagamento(){
        pedidosLista.forEach((itens)=>{
            refPedidos.doc(itens.id).update({
                pago: true
            })
            return () => {
                setState({});
              };
        })
    }    
        function alert(){
             Alert.alert(
            "Solicitação de encerramento enviada",
            "Por favor, dirija-se ao caixa para efetuar o pagamento, o valor total é R$" + (valorTotal),
            [
                {
                text:"Aceitar",
                onPress: () => {
                    setValorTotal(''), pagamento()
                },
                style: "accept"
                }
            ]
        )
        }
        const showAlert = () =>
        Alert.alert(
        "Confirma o fechamento da comanda?",
        "",
        [
            {
            text: "Cancelar",
            style: "cancel",
            },
            {
                text:"Aceitar",
                onPress: () => {
                    alert()
                },
                style: "accept"
            }
        ],
    );
    return(
        <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
             <View style={styles.cartHeader}> 
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Comanda</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pedidosLista} 
                    renderItem={( { item } )=>{
                        return(
                        <View style={styles.prod}>
                            {item.cart.map((item) =>{
                                return(    
                                    <View style={styles.cartCard} key={uuidv4()}>
                                        <View style={{
                                            height: 100,
                                            marginLeft: 10,
                                            justifyContent: 'center',
                                            paddingVertical: 20,
                                            flex: 1
                                        }}>
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>Nome do Produto: </Text>
                                            <Text style={{color: '#000', fontSize: 16}}>{item.nome}</Text>
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>Quantidade: </Text> 
                                            <Text style={{color: '#000', fontSize: 16}}>{item.qty}</Text>      
                                            <Text style={{fontWeight: 'bold',color: '#000', fontSize: 16}}>Valor do Pedido: </Text> 
                                            <Text style={{color: '#000', fontSize: 16}}>R$ {item.qty * item.valor}</Text>     
    
                                        </View>
                                    </View>
                                )
                                
                            })}
                        </View>
                        )
                        
                    }
                    }
                    
                    ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
                    ListFooterComponent= {() =>(
                    
                   
                    <View>
                        <TouchableOpacity
                            style={styles.btnCart}
                            onPress={() => showAlert()}
                        >
                            <Text style = {styles.text}>Fechar Comanda</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                    />
            </View>
            
        </SafeAreaView>
    )
}