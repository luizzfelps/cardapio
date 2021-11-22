import {StyleSheet, Dimensions} from 'react-native'
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20

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
        paddingHorizontal: 5,
        margin: 5,
        fontSize: 25,
        color: '#000'
    },
    texto:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    Produtos:{
        padding: 5,
        marginTop: 5,
        
        

    },
    prod:{
        
        
        
    },
    ProdutosDescricao:{
        height: 230,
        width: cardWidth,
        marginHorizontal: 5,
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: '#fff',
        
        
        
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
    verDetalhes: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: '#F9813A',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default styles;