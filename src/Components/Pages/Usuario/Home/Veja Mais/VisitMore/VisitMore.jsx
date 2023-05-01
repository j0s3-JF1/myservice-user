import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

const VisitMore = () => {

    const navigation = useNavigation();

    function VisitScreen(){
        navigation.navigate('Visit');
    }

    return (
        <TouchableOpacity onPress={() => VisitScreen()}>
            <Text style={{ color: '#0A3DC2', left: 70 }}>Veja Mais</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

})

export default VisitMore;