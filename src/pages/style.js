import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        
    },
    img:{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%"
    },
    btnAdm:{
        paddingTop: 8,
        paddingRight:8,
        
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 50
    },
    btnCardapio:{
        flex:1,
        paddingBottom: 100,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'center'
        
    },
    
    adm:{
        backgroundColor: "#fff",
        borderRadius: 50,
        color: "#f00",
        width: 50,
        height: 40,
        textAlign: 'center'
       

    },
    cardapio:{
        backgroundColor:"#FA6800",
        width: 100,
        height: 50,
        borderRadius: 50,
        justifyContent:"center",
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        fontSize: 25
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