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
        
        

    },
    prod:{
        
        
        
    },
    ProdutosDescricao:{
        height: 220,
        width: 170,
        marginHorizontal: 10,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: '#ccc'
        
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