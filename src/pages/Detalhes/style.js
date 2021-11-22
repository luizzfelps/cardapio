import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    header:{
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20
    },

    logo:{
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
    
    imagemProd:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 280,
        
    },
    details:{
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor: '#F9813A',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,

    },
    detailsText:{
        marginTop: 20,
        lineHeight: 22,
        fontSize: 16,
        color: '#fff'
    },
    priceText:{
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
    },
    btn:{
    marginTop: 55,
    height: 60,
    borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
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