import React, { useState } from "react";
import { FlatList } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//Importação de componentes
import FindButton from "./FindButton/FindButton";

//Importação de estilo
import styles from "./Style";

//Importação de API
import API from '../../Usuario/Home/FindButton/API/FindAPI';

export default function Find() {

    const [findList, setFindList] = useState(API);

    return (
        <View style={styles.container}>
            <Text style={{ color: '#0A3DC2', fontWeight: '900', fontSize: 40 }}>Mais Procurados</Text>
            <View style={{
                backgroundColor: '#000',
                width: '90%',
                height: 2,
            }} />
            <View style={{top: '10%'}}>
                <ScrollView>
                    <FlatList
                        horizontal
                        style={{
                            width: '100%',
                            height: '100%',

                        }}
                        data={findList}
                        renderItem={({ item }) => {
                            return (
                                <FindButton data={item} />
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