import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CategoryButton = ({ servico }) => {

    //navegação + parametro
    const navigation = useNavigation();

    const params = {
        categoria: servico.categoria,
    }

    return (
        <TouchableOpacity
            style={styles.buttonCategory}
            onPress={() => navigation.navigate('ServiceResult', params)}
        >
            <Text>{servico.categoria}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonCategory: {
        width: '80%',
        height: 50,
        margin: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
})

export default CategoryButton;