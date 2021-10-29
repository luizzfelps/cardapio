import { forwardRef } from 'react';
import {StyleSheet} from 'react-native'
import { fonts } from 'react-native-elements/dist/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF0F1",
        alignItems: 'flex-start',
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
       
    },
    headerLogo:{
        width: 40,
        height: 40, 
        borderRadius: 3
    },
    headerText:{
        fontSize: 35,
        fontWeight: '600',
        color: '#44403C'
    },

    title:{
        margin: 5,
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        
    },
    
    Produtos:{
        padding: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        flexDirection:"row",
    },
    ProdutosDescricao:{
        fontSize: 15,
        fontWeight: 'bold',
        width:"98%",
        borderRadius: 10,
        backgroundColor:"#fff",
        padding: 30,
        color:"#282b2db5",
        elevation: 10
        
    },
});
export default styles;