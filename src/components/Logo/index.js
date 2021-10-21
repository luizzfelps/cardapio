import React from 'react';
import {
    StyleSheet,
    View, 
    Image, 
    Text
} from 'react-native';
import styles from './styles';

const logo = require('../../../assets/logoVinland.png')

export function Logo() {
    return (
        <View style ={{ flex: 1 }}>
            <View style ={styles.header}>
                <Image source= { logo } style={styles.headerLogo}/>
                <Text style={styles.headerText}>Vinland Bar</Text>
            </View>
        </View>
    );
};

