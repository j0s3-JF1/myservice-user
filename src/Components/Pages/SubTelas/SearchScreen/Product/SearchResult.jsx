import { useRoute } from "@react-navigation/native";
import React from "react";
import { 
    View,
    TouchableOpacity,
    Text,
    Image,
    PixelRatio,
    StyleSheet, 
} from "react-native";

export default function SearchResult(){
    const route = useRoute();

    const { categoria } = route.params;

    return(
        <View
            style={styles.container}
        >
            <Text>{categoria}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F8F8F8',
    }
})