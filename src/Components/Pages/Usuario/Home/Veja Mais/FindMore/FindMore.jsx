import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text } from "react-native";

const FindMore = () => {

    const navigation = useNavigation();

    function FindScreen(){
        navigation.navigate('Find')
    }

    return (
        <TouchableOpacity onPress={() => FindScreen()}>
            <Text style={{ color: '#0A3DC2', left: 72 }}>Veja Mais</Text>
        </TouchableOpacity>
    );
}

export default FindMore;