import {StyleSheet} from 'react-native'

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
        width: 40,
        height: 40, 
        borderRadius: 3
    },
    headerText:{
        fontSize: 35,
        fontWeight: '600',
        color: '#44403C'
    },
    Produtos:{
       
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5


    },
    details:{
        
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        marginBottom: 5
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
    btn:{
      
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
});
export default styles;