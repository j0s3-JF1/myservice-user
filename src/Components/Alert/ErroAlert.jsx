import React, { useState } from 'react';
import { View, Modal, Alert, StyleSheet, TouchableOpacity, Text } from 'react-native';


//Modal de Erro
const ErroAlert = ({ visibled }) => {

    const [isModalVisible, setModalVisible] = useState(visibled);
    
    return(
        <View style={styles.container}>
            <Modal
                visible={isModalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Modal de Cadastro</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <Text>Fechar</Text>    
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ErroAlert;