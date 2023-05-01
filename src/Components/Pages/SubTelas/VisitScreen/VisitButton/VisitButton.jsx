import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { StyleSheet } from "react-native";


const VisitButton = ({ data }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image source={{ uri: data.foto }} style={styles.image} />
            <Text style={{ fontWeight: 'bold', }}>{data.descricao}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFF',
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
    },

    image: {
        width: '100%',
        height: '80%',
        borderRadius: 10,
        resizeMode: 'stretch',
        bottom: '5%',
    },
})

export default VisitButton;