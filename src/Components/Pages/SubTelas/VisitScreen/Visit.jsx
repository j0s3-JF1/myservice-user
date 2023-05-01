import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView, FlatList } from "react-native";

//Importação de estilo
import styles from "./Style,";

//Importação de componente
import VisitButton from "./VisitButton/VisitButton";

//Importação de API
import API from '../../Usuario/Home/VisitButton/API/VisitAPI'

export default function Visit() {

    const [visitList, setVisitList] = useState(API);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#0A3DC2', fontWeight: '900', fontSize: 40 }}>Mais Visitados</Text>
            <View style={{
                backgroundColor: '#000',
                width: '90%',
                height: 2,
            }} />
            <View style={{ top: '10%' }}>
                <ScrollView>
                    <FlatList
                        horizontal
                        style={{
                            width: '100%',
                            height: '100%',

                        }}
                        data={visitList}
                        renderItem={({ item }) => {
                            return (
                                <VisitButton data={item} />
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