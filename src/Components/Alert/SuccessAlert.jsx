import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';

// Modal de sucesso
const SuccessAlert = () => {
    return (
        <View>
            <Modal isVisible={true}>
                <View>
                    <Text>Isso é um alerta!</Text>
                    <TouchableHighlight>
                        <Text>Fechar</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})

export default SuccessAlert;