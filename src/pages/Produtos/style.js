import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF0F1",
        alignItems: 'flex-start',
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
        borderRadius: 3,
        
    },
    headerText:{
        fontSize: 35,
        fontWeight: '600',
        color: '#44403C'
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
        padding: 5,
        marginTop: 5,
        

    },
    prod:{
        alignItems: 'flex-start',
        flexDirection: "column",
        
    },
    ProdutosDescricao:{
        width: 180,
        height: 210,
        margin: 5,
        alignContent:"center",
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor:"#fff",
        padding:8,
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