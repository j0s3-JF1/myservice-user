import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfilePicture from "./ProfilePic/ProfilePicture";
import { DadosUsuario } from "../Login/SalvarJWT/AuthContext";


export default function Profile() {

    //Dados do usuario
    const [usuario, setUsuario] = useState("");

    async function PreencherDados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        PreencherDados();
    }, []);



    //navegação para tela de edição
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "white",
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    borderColor: '#0A3DC2',
                    borderWidth: 1,
                    bottom: '25%',
                }}
                onPress={() => navigation.navigate('MenuEdit')}
            >
                <FontAwesome5 name={'user-edit'} color={'#0A3DC2'} size={25} />
            </TouchableOpacity>
            <ProfilePicture />
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                top: '5%'
            }}></View>
            <Text
                style={{
                    fontWeight: '900',
                    fontSize: 25,
                    top: '5%'
                }}>
                {usuario.Nome} {usuario.SobreNome}
            </Text>
            <Text></Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8'
    },
});

