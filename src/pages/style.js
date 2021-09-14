import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },container2:{
        paddingTop: 20
    },
    cardapio:{
        backgroundColor:"#778899",
        width: 60,
        borderRadius:20,
        alignContent:"flex-start",
        justifyContent:"center",

    },
    Produtos:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5


    },
    ProdutosDescricao:{
        width:"75%",
        alignContent:"flex-start",
        justifyContent:"center",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        paddingHorizontal:20,
        borderRadius: 50,
        marginBottom:5,
        marginRight:15,
        color:"#282b2db5"
        
    },
    buttonDetalhes:{
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:50,
        alignItems: "center",
        justifyContent:"center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:20
    },
    excluirProduto:{
        justifyContent:"center",
        paddingLeft:15
    },
    addProduto:{
        justifyContent:"center",
        paddingLeft:15
    },
    input: {
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10
      },

});
export default styles;