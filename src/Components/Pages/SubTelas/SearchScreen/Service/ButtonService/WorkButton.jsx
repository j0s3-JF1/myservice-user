import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from "react-native";

const WorkButton = ({ trabalhador }) => {
    return (
        <TouchableOpacity
            style={{
                width: PixelRatio.getPixelSizeForLayoutSize(100),
                height: PixelRatio.getPixelSizeForLayoutSize(40),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
                elevation: 3,
                marginTop: 15,
                borderRadius: 10
            }}
            activeOpacity={0.7}
        >
            <Text>{trabalhador.nome}</Text>
            <Text>{trabalhador.categoria}</Text>
        </TouchableOpacity>
    );
}

export default WorkButton;