import React, { useState } from 'react';
import { View, Modal, Alert, StyleSheet, TouchableHighlight } from 'react-native';

// Modal de sucesso
const SuccessAlert = () => {

    const [showAlert, setShowAlert] = useState(true);

    const handleShowAlert = () => {
        setShowAlert(true);
    };

    const handleHideAlert = () => {
        setShowAlert(false)
    }

    return (
        <Alert
            visible={showAlert}
            title="Success"
            message="Cadastro efetuado com sucesso"
            onPress={handleHideAlert}
        />
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