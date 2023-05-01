import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const AvaliateMore = () => {

    const navigation = useNavigation();

    function AvaliateScreen() {
        navigation.navigate("Avaliate")
    }

    return (
        <TouchableOpacity onPress={() => AvaliateScreen()}>
            <Text style={{ color: '#0A3DC2', left: 60 }}>Veja Mais</Text>
        </TouchableOpacity>
    );
}

export default AvaliateMore;