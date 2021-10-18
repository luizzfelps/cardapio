import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Button, Image} from "react-native"

import styles from "./style"
import {useCart} from '../../context/cart'



export default function Detalhes({navigation, route}){
    const {add} = useCart()
    const [id, setId] = useState(route.params.id)
    const [nome, setNome] = useState(route.params.nome)
    const [descricao, setDescricao] = useState(route.params.descricao)
    const [valor, setValor] = useState(route.params.valor)
    const [produto, setProduto] = useState(route.params.produtoBruto)
    const [imagem, setImagem] = useState(route.params.imagem)

    return(
       <View style={styles.container}> 
       
        <View style={styles.details}>
        <Image
            style={{ width: 150, height: 150, borderRadius: 8}}
            source={{
               uri: imagem,
            }}
           />
           <Text>{nome}</Text>
           <Text>{descricao}</Text>
           <Text>R$ {valor}</Text>
           
        </View>
           <Button 
                title="Adicionar ao Carrinho"
                onPress={() => add(produto)}>
           </Button>
           
       </View>
    )
}
