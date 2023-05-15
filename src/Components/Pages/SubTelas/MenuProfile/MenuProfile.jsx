import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const MenuProfile = () => {
    
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Text>Editar informações</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Deletar Usuario</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
});

export default MenuProfile;