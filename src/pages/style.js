import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    containerHome: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center'
  },
  buttonsHome: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#FAF0E6',
  },
  textHome: {
    fontSize: 20
  },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 10,
    },
    Produtos:{
        marginTop:5,
        alignItems: 'center',
        alignContent: 'center',
    },
    ProdutosDescricao:{
        width:"50%",
        justifyContent:"center",
        backgroundColor:"#f5f5f5cf",
        padding:12,
        borderRadius: 50,
        color:"#282b2db5",
        textAlign: 'center'        
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
        position: 'relative',
        marginTop: 550,
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignItems: 'center',
        
        
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
        fontSize: 25,
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
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },  
    header:{
      paddingHorizontal: 15,
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 20,
    },
    
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "#87CEFA",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      } ,
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },  
      textInput: {
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10
      },
      buscar: {
        margin: 5,
        paddingHorizontal: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        borderRadius: 8,
        width:75,
        height: 40,
        backgroundColor: "#2196F3",
        alignContent: "center",
        
      },

});
export default styles;