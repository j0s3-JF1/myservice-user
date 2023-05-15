import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function JobScreen(){
    
    //constante de rotas
    const route = useRoute();

    //constante de valores vindo das rotas
    const { nome, empresa } = route.params;
    
    return(
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <Text style={styles.titleName}>{nome}</Text>
            <Text>{empresa}</Text>
            <View style={{width: "85%", height: 2, backgroundColor: 'brown'}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleName: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})