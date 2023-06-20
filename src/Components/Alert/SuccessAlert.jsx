import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';

// Modal de sucesso
const SuccessAlert = ({ visibled, }) => {

    const [closeModal, setCloseModal] = useState(!visibled)

    function closed(){
        if (visibled == true) {
            visibled = false
        }
    }

    return (
            <Modal
                visible={visibled}
                animationType="fade"
                transparent={true}
            >
                <View style={styles.container1}>
                    <View style={{ backgroundColor: 'white', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Modal de Cadastro</Text>
                        <TouchableOpacity onPress={closed} >
                            <Text>Fechar</Text>    
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    );
}

const styles = StyleSheet.create({
    container1: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
})

export default SuccessAlert;