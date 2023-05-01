import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';

import styles from "./Style";
import { useNavigation } from "@react-navigation/native";

export default function CadastroUser() {

    const navigation = useNavigation();

    //Password input
    const [hidePass, setHide] = useState(true)

    //Cadastro Input
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma, setConfirma] = useState("")

    // função de cadastro de usuario
    function Cadastrar() {

        const body = { nome, sobrenome, email, senha };

        if (nome == "" || sobrenome == "" || email == "" || senha == "") {
            alert('Preencha todos os campos');
        }else{
            if (senha == confirma) {
                fetch("https://myserviceserver.azurewebsites.net/api/user", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
                .then((response) => {
                    alert("Usuário cadastrado com sucesso");
                })
                .then(() => {
                    navigation.navigate('Login')
                })
                .catch((error) => {
                    console.log(error);
                    alert("Erro ao cadastrar resultado");
                });
            } else{
                alert('As senhas estão diferentes, por favor corrija-as')
            }
        }
    }

    // Mudança de tela
    const LoginScreen = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../../assets/MyService_Logo.png')} style={styles.Logo} />
            <Text style={styles.title}>CADASTRAR-SE</Text>
            <View style={styles.containerInput}>
                <View style={styles.nameArea}>
                    <View style={styles.nameIcon}>
                        <AntDesign name="user" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Nome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setNome(texto)}
                    />
                </View>
                <View style={styles.secondNameArea}>
                    <View style={styles.secondIcon}>
                        <AntDesign name="user" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Sobrenome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setSobrenome(texto)}
                    />
                </View>
                <View style={styles.emailArea}>
                    <View style={styles.emailIcon}>
                        <AntDesign name="mail" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Email'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>
                <View style={styles.passArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setSenha(texto)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setHide(!hidePass)}>
                        {
                            hidePass ?
                                <Ionicons name="eye" color='lightgray' size={25} />
                                :
                                <Ionicons name="eye-off" color='lightgray' size={25} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.cofirmArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Confirmar Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setConfirma(texto)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setHide(!hidePass)}>
                        {
                            hidePass ?
                                <Ionicons name="eye" color='lightgray' size={25} />
                                :
                                <Ionicons name="eye-off" color='lightgray' size={25} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.CadastroButton} onPress={Cadastrar}>
                <Text style={styles.textButton}>CADASTRAR-SE</Text>
            </TouchableOpacity>
            <View style={styles.textCadastro}>
                <Text>Ja possui uma conta?</Text>
                <TouchableOpacity onPress={() => LoginScreen()}>
                    <Text style={{ fontWeight: 'bold' }}> Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
