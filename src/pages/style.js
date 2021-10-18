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

      buscar: {
        display: 'flex',
        textAlign: "center",
        width: '25%',
        height: '25%',
        backgroundColor: "#2196F3",
        alignContent: "center",
        alignItems: 'flex-start',
      },

});
export default styles;