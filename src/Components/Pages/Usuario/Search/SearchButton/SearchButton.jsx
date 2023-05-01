import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SearchButton = ({category}) => {
    return (
        <TouchableOpacity style={styles.buttonCategory}>
            <Text>{category}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonCategory: {
        width: '180%',
        height: 60,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
})

export default SearchButton;