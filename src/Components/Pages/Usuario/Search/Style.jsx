import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '20%'
    },

    Search:{
        flexDirection: 'row',
        width: '95%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 2,
        bottom: 30,
    },

    iconSearch:{
        width: '15%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputSearch: {
        width: '70%',
        height: 40,
        fontSize: 20,
    },
})

export default styles;