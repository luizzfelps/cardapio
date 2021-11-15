import { forwardRef } from 'react';
import {StyleSheet} from 'react-native'
import { fonts } from 'react-native-elements/dist/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: '100%',
       
    },
    headerLogo:{
        marginTop: 7,
        width: 50,
        height: 50, 
        borderRadius: 50
    },
    headerText:{
        marginTop: 7,
        fontSize: 35,
        fontWeight: '600',
        color: '#44403C'
    },

    title:{
        marginLeft: 5,
        fontSize: 22,
        color: '#333', 
    },
    inputContainer:{
        flex: 1,
        height: 50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#E5E7EB',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    orderBtn:{
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: "#F9813A",
        justifyContent: 'center',
        alignItems: 'center'
    },
    lista:{
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        
        
    },
    btnCategoria:{
        backgroundColor: '#F9813A',
        height: 45,
        width: 120,
        marginRight: 7,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row'

    },
    categoriaIcone:{
        height: 35,
        width: 35,
        backgroundColor: '#fff',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
   /*Produtos:{
        padding: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        
    },*/
    ProdutosDescricao:{
        height: 220,
        width: 170,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: '#ccc'
        
        
    },
    Produtos:{
        padding: 5,
        marginTop: 5,
        

    },
    prod:{
        
        
    },
    texto:{
        color: '#000',
        fontSize: 20,
        
    },
});
export default styles;