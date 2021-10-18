import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#34465D",
        paddingTop: 20
    },
    Produtos:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5


    },
    details:{
        backgroundColor: "#ccc",
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