import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, PixelRatio, StyleSheet } from "react-native";

const Trabalho = ({ work }) => {

    //Constante para navegação de parametros
    const navigation = useNavigation();
    //Parametro
    const params = {
        id: work.id,
        nome: work.produto_Nome,
        categoria: work.produto_Categoria,
        descricao: work.produto_Descricao,
        preco: work.produto_Preco,
    }

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProductView', params)}
        >
            <Text>{work.produto_Nome}</Text>
            <Text>{work.produto_Categoria}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '65%',
        height: PixelRatio.getPixelSizeForLayoutSize(70),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(5)
    },
})

export default Trabalho;