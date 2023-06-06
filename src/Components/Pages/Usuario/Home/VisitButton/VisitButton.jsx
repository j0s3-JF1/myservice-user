import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, Image, PixelRatio } from "react-native";
import { StyleSheet } from "react-native";


const VisitButton = ({ visits }) => {

    //rotas + parametro
    const params = {
        categoria: visits.categoria
    }

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
        style={styles.buttonVisit}
        onPress={() => navigation.navigate('ServiceResult', params)}
        >
            <Text>{visits.categoria}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonVisit: {
        backgroundColor: '#FFF',
        width: 150,
        height: 50,
        elevation: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(2)
    },
})

export default VisitButton;