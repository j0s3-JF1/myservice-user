import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

//Importção de componentes
import ProfilePic from '../../Usuario/Profile/ProfilePic/ProfilePicture'

//importe de estilização
import styles from './Style'
import { useNavigation } from "@react-navigation/native";

export default function EditScreen() {

    //navegação
    const navigation = useNavigation();

    //campos de informações
    
    const id = 1 // valor virá apartir do token do usuario
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    //atualização de dados
    const DataUpdate = () => {
        const body = { id, nome, sobrenome, email, senha }

        fetch('https://myserviceserver.azurewebsites.net/api/user', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                alert("Alterações realizadas com sucesso");
            })
            .then(() => {
                navigation.navigate('Profile')
            })
            .catch((err) => {
                console.log(err);
                alert("Erro ao alterar as informações");
            });
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', bottom: '10%' }}>Editar Perfil</Text>
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                bottom: '10%'
            }}></View>
            <View style={{ bottom: '7%' }}>
                <ProfilePic />
            </View>
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                bottom: '3%'
            }}></View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="user" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Nome'
                    placeholderTextColor='#131212'
                    onChangeText={(texto) => setNome(texto)}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="user" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Sobrenome'
                    placeholderTextColor='#131212'
                    onChangeText={(texto) => setSobrenome(texto)}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="mail" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Email'
                    placeholderTextColor='#131212'
                    onChangeText={(texto) => setEmail(texto)}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="lock" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Senha'
                    placeholderTextColor='#131212'
                    onChangeText={(texto) => setSenha(texto)}
                />
            </View>
            <View style={{ width: '60%', height: '7%', top: "5%" }}>
                <TouchableOpacity style={styles.buttonUpdate} onPress={DataUpdate}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}