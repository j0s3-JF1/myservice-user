import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { Alert } from "react-native";

const MenuProfile = () => {

    const navigation = useNavigation();

    const id = 17;

    const DeletarUsuario = () => {

        fetch("https://myserviceserver.azurewebsites.net/api/user/" + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
        })
            .then(() => {
                alert("Usuario Deletado");
            })
            .then(() => {
                navigation.navigate("Login");
            })
            .catch((err) => {
                console.log(err);
                alert('Erro ao deletar usuario');
            });
    }

    const AlertDelete = () =>
        Alert.alert('Deletar', 'tem certeza que deseja efetuar esta ação?', [
            {
                text: 'Deletar',
                onPress: () => DeletarUsuario(),
            },
            {
                text: 'Cancelar',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel'
            }
        ]);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={styles.buttonEdit}>
                <Text style={styles.buttonTextEdit}>Editar informações</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEdit} onPress={AlertDelete}>
                <Text style={styles.buttonTextDelete}>Deletar Usuario</Text>
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
        backgroundColor: '#F8F8F8'
    },

    buttonEdit: {
        width: '100%',
        height: '5%',
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderColor: 'brown',
        borderWidth: 1,
        elevation: 2,
        bottom: '40%'
    },

    buttonTextEdit: {
        fontWeight: 'bold',
        marginLeft: '2%'
    },

    buttonTextDelete: {
        color: 'red',
        fontWeight: 'bold',
        marginLeft: '2%'
    },
});

export default MenuProfile;