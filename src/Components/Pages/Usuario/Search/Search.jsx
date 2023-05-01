import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//Import estilização
import styles from "./Style";
import SearchButton from "./SearchButton/SearchButton";


export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.Search}>
                <View style={styles.iconSearch}>
                    <Ionicons name="search" size={25} color='#0A3DC2' />
                </View>
                <TextInput placeholder="Pesquisar" style={styles.inputSearch} />
            </View>
            <Text style={{ fontWeight: 'bold', bottom: 20, right: '35%' }}>Categorias</Text>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ right: '200%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                    <View style={{ left: '110%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: 20 }}>
                    <View style={{ right: '200%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                    <View style={{ left: '110%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', top: 40 }}>
                    <View style={{ right: '200%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                    <View style={{ left: '110%' }}>
                        <SearchButton
                            category={'eletricista'}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}