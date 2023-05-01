import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F8F8F8',
    },

    Search:{
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 2,
        bottom: 30,
    },

    iconSearch:{
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputSearch: {
        width: '70%',
        height: 50,
        fontSize: 20,
    },
})

export default styles;