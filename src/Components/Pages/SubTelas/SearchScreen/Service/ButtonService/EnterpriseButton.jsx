import React from "react";
import {
    View,
    TouchableOpacity, 
    Image,
    Text,
    PixelRatio,
    StyleSheet,
} from "react-native";

const EnterpriseButton = ({ empresa }) => {
    return(
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
            <Text>{empresa.nome}</Text>
            <Text>{empresa.categoria}</Text>
        </TouchableOpacity>
    );
}

export default EnterpriseButton;