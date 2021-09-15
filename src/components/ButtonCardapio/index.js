import React from 'react';
import {
    Text, 
    View,
    TouchableOpacity

} from 'react-native';

import {styles} from './styles';

export function ButtonCardapio() {
    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Categorias")
        }}
    >
            <Text>
                cardapio
            </Text>
        </TouchableOpacity>
    )
}