import React, { useState, useEffect } from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, Touchable, Button, Image, ScrollView} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from "./style"
import {useCart} from '../../context/cart'

const logo = require('../../../assets/logoVinland.png')

export default function Detalhes({navigation, route}){
    const {add} = useCart()
    const [id, setId] = useState(route.params.id)
    const [nome, setNome] = useState(route.params.nome)
    const [descricao, setDescricao] = useState(route.params.descricao)
    const [valor, setValor] = useState(route.params.valor)
    const [produto, setProduto] = useState(route.params.produtoBruto)
    const [imagem, setImagem] = useState(route.params.imagem)

    return(
       <SafeAreaView style={{flex: 1}}>
       <View style={styles.container}> 

       <View style={styles.header}> 
         <Icon name = "arrow-back-ios" size={28} onPress={navigation.goBack}/>
         <Text style={{fontSize:20, fontWeight: 'bold'}}>Detalhes</Text>
       </View>
               <View style ={styles.logo}>
                <Image source= { logo } style={styles.headerLogo}/>
                <Text style={styles.headerText}>VINLAND BAR</Text>
               </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imagemProd}>
         <Image
            style={{ width: 220, height: 220, borderRadius: 8}}
            source={{
               uri: imagem.uri,
            }}
           />
         </View>
         <View style={styles.details}>
            <View style={{
               flexDirection: 'row', 
               justifyContent: 'space-between',
               alignItems: 'center'}}>
               
               <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>{nome}</Text>
            </View>
            <Text style={styles.detailsText}>{descricao}</Text>
            <Text style={styles.priceText}>R$ {valor}</Text>
           <TouchableOpacity
                style={styles.btn}
                onPress={() => add(produto)}>
                  <Text style={{fontSize: 18, color: '#F9813A'}}>ADICIONAR AO CARRINHO</Text>
           </TouchableOpacity>
         </View>

      </ScrollView> 
           
       </View>
       </SafeAreaView>
    )
}
