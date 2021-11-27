import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    Produtos:{
        /*width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5*/
        padding: 5,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
        flexDirection:"row",


    },
    excluirProduto:{
        justifyContent:"center",
        
    },
    ProdutosDescricao:{
        /*width:"75%",
        alignContent:"flex-start",
        justifyContent:"center",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        paddingHorizontal:20,
        borderRadius: 50,
        marginBottom:5,
        marginRight:15,
        color:"#282b2db5"*/
        fontSize: 15,
        fontWeight: 'bold',
        width:"98%",
        borderRadius: 10,
        backgroundColor:"#fff",
        padding: 30,
        color:"#282b2db5",
        elevation: 10
        
    },
    ProdutosEditar:{
      
        fontSize: 15,
        fontWeight: 'bold',
        width:"75%",
        borderRadius: 10,
        backgroundColor:"#fff",
        padding: 30,
        color:"#282b2db5",
        
        
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
        fontSize:15,
        alignItems: 'center',
        justifyContent:'center',
        fontWeight:"bold"
    },
    newProduct:{
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#f92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonNewProduct:{
        
        width:80,
        height:80,
        position: 'relative',
        bottom:50,
        left:20,
        backgroundColor:"#f92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize: 23,
        fontWeight: 'bold',
        margin: 7
    },
    text:{
        fontSize: 20,
        margin: 7
    },
    inputText: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        backgroundColor: '#fff',
        elevation: 2,
        margin: 7,
        height: 37,
        borderRadius: 10,
    },
    //pagina new product
    addImage:{
        flex: 1,
        margin: 7,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        margin: 7,
        width: 150,
        height: 50,
        borderRadius: 3,
        backgroundColor: '#f92e6a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textImage:{
        color: '#fff',
        fontWeight: 'bold'
    },
    scroll:{
        flex: 1
    },
    prodImg:{
        width: 100,
        height:100,
        borderRadius: 10,
        margin: 7
    },

    btnCozinha:{
        width: 255,
        height: 60,
        margin: 5,
        justifyContent: 'center',  
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#F9813A',
        alignItems: 'center',

    },
    
});
export default styles;