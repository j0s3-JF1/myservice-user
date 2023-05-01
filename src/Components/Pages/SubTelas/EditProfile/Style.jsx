import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '12%'
    },

    InputArea: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: '5%',
        top: '15%',
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 10,
    },

    InputIcon: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Input: {
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        width: '85%',
        height: '100%',
        fontSize: 18,
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    buttonUpdate:{
        backgroundColor: '#0A3DC2',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
})

export default styles;