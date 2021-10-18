import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF0F1",
        paddingTop: 20
    },
    title:{
        fontWeight: 'bold',
        margin: 5,
        fontSize: 25,
        color: '#000'
    },
    texto:{
        color: '#000',
        fontSize: 20,
        
    },
    Produtos:{
        flex: 1,
        width:'100%',
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:5,
        


    },
    prod:{
        alignItems: 'flex-start',
        flexDirection: "column",
    },
    ProdutosDescricao:{
        width:"100%",
        margin: 5,
        alignContent:"center",
        alignItems: 'center',
        justifyContent:"space-between",
        flexDirection: "row",
        backgroundColor:"#fff",
        padding:12,
        paddingHorizontal:10,
        borderRadius: 10,
        color:"#282b2db5",
        elevation: 5
        
    },
    buttonDetalhes:{
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:10,
        alignItems: "center",
        justifyContent:"center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:20
    }, 
});
export default styles;