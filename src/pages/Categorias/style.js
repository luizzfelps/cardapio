import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34465D",
        alignItems: 'flex-start',
        
    },

    title:{
        margin: 5,
        fontSize: 25,
        color: '#fff'
    },
    
    Produtos:{
        margin: 5,
        paddingHorizontal:15,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        flexDirection:"row",
        elevation: 2

    },
    ProdutosDescricao:{
        fontSize: 15,
        width:"98%",
        borderRadius: 10,
        backgroundColor:"#fff",
        padding: 30,
        color:"#282b2db5",
        elevation: 2
        
    },
});
export default styles;