import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    Produtos:{
        flex: 1,
        width:'100%',
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5


    },
    ProdutosDescricao:{
        width:"100%",
        margin: 5,
        alignContent:"center",
        alignItems: 'center',
        justifyContent:"center",
        backgroundColor:"#A0522D",
        padding:12,
        paddingHorizontal:10,
        borderRadius: 50,
        marginBottom:5,
        marginRight:20,
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