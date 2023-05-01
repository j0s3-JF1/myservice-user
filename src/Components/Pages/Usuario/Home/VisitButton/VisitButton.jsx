import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";


const VisitButton = ({ visits }) => {
    return (
        <TouchableOpacity style={styles.buttonVisit}>
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
        alignItems: 'center'
    },
})

export default VisitButton;