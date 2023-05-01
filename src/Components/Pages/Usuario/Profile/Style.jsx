import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1
    },

    divisao: {
        backgroundColor: '#000',
        width: '90%',
        height: 2,
        bottom: '30%',
    },

    buttonWork: {
        backgroundColor: '#0A3DC2',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },

    buttonAbout: {
        width: '25%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
})

export default styles;