import React, { useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";

//Importe Componentes
import ProfilePicture from "./ProfilePic/ProfilePicture";
import EditProfile from "./EditProfile/EditProfile";

//Importe de estilo
import styles from "./Style";

export default function Profile() {

    //Renderização de tela
    const [trabalhoScreen, setTrabalhoScreen] = useState(true);

    return (
        <View style={styles.container}>
            <EditProfile/>
            <ProfilePicture/>
            <Text style={{ fontSize: 25, fontWeight: 'bold', bottom: '32%' }}>Fernando Barbosa</Text>
            <View style={styles.divisao} />
        </View>
    );
}

