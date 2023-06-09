import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Logo: {
        resizeMode: 'stretch',
        width: 320,
        height: 60,
        bottom: 100,
    },

    title: {
        color: '#0A3DC2',
        fontFamily: 'tahoma, arial, verdana',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
        top: 10,
    },

    containerInput: {
        top: 35,
    },

    nameArea: {
        bottom: 20,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
    },

    nameIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    secondNameArea: {
        bottom: 15,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
    },

    secondIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    emailArea: {
        bottom: 10,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
    },

    emailIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    passArea: {
        bottom: 5,
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
    },

    lockIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cofirmArea: {
        bottom: 0,
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
    },

    Input: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '85%',
        height: 50,
        fontSize: 18,
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    CadastroButton: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 250,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        top: 100,
    },

    textButton: {
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0,
        textTransform: 'uppercase'
    },

    textCadastro: {
        top: '40%',
        flexDirection: 'row'
    },
})

export default styles;