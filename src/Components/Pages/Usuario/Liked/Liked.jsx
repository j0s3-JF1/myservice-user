import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";

//Importação de estilo
import styles from "./Style";

//Importação de componentes
import LikedButton from "./LikedButton/LikedButton";

//Importação de API
import API from './API/LikedAPI';


export default function Liked() {

    const [likedList, setLikedList] = useState(API);
    
    return (
        <View style={styles.container}>
            <Text style={{ color: '#0A3DC2', fontWeight: '900', fontSize: 40 }}>Suas Curtidas</Text>
            <View style={{
                backgroundColor: '#000',
                width: '90%',
                height: 2,
            }} />
            <View>
            </View>
        </View>
    );
}