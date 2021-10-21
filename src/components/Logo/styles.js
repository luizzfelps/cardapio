import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70
    },
    headerLogo:{
        width: 30,
        height: 30
    },
    headerText:{
        fontSize: 20,
        fontWeight: '600',
        color: '#000'
    },
});
export default styles;