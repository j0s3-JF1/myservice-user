import React, { useState } from "react";
import { FlatList, ScrollView } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

//Importação de estilo
import styles from "./Style";

//Importação de API
import API from '../../Usuario/Home/AvaliateButton/API/AvaliateAPI';
import AvaliateButton from "./AvaliateButton/AvaliateButton";

export default function Avaliate() {

    const [avaliateList, setAvaliateList] = useState(API);
    
    return (
        <View style={styles.container}>
            <Text style={{ color: '#0A3DC2', fontWeight: '900', fontSize: 40 }}>Mais Avaliados</Text>
            <View style={{
                backgroundColor: '#000',
                width: '90%',
                height: 2,
            }} />
            <View style={{ top: '10%',}}>
                <ScrollView>
                    <FlatList
                        horizontal
                        style={{
                            width: '100%',
                            height: '100%',

                        }}
                        data={avaliateList}
                        renderItem={({ item }) => {
                            return (
                                <AvaliateButton data={item} />
                            )
                        }}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
        </View>
    );
}