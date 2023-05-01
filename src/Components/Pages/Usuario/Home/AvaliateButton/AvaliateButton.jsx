import React from "react";
import { useState } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";

const AvaliateButton = ({ data }) => {

    const [likeButton, setLike] = useState(true);

    return (
        <TouchableOpacity style={styles.buttonAvaliado}>
            <Image
                source={{uri: data.image}}
                style={{
                    width: 150,
                    height: 120,
                    resizeMode: 'stretch',
                    borderRadius: 15,
                    right: 30,
                }}
            />
            <View>
                <Text>{data.name}</Text>
                <Text>{data.category}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="location" size={25} color='#000' />
                    <Text>{data.location}</Text>
                </View>
                <Text style={{ color: 'lightgray', }}>{data.number}</Text>
            </View>
            <TouchableOpacity onPress={() => setLike(!likeButton)}>
                {
                    likeButton ?
                        <FontAwesome name="heart-o" size={25} color='#000' />
                        :
                        <FontAwesome name="heart" size={25} color='#0A3DC2' />
                }
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonAvaliado: {
        width: 350,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#FFF',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
})

export default AvaliateButton;