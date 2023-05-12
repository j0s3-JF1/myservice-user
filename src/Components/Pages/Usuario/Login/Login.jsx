import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Importe estilização
import styles from "./Style";
import SuccessAlert from "../../../Alert/SuccessAlert";

export default function Login() {

    const navigation = useNavigation();

    const showAlert = () => {
        <SuccessAlert/>
    };

    //Password input
    const [password, setPassword] = useState('');
    const [hidePass, setHide] = useState(true);

    // Switch Button
    const [isEnable, setEnable] = useState(true);
    const [text, setText] = useState(null);

    const tootleSwitch = () => {
        if (isEnable) {
            setText('Inactivate')
        } else {
            setText('Activate')
        }

        setEnable(previousState => !previousState)
    }

    //Botão Cadastro
    const CadastroScreen = () => {
        navigation.navigate('Cadastro')
    }

    //Login do usuario
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function Login() {

        const body = { email, senha }

        if (email == "" && password == "") {
            alert('Preencha os campos!');
        }
        else {
            useEffect(() => {
                fetch('https://myserviceserver.azurewebsites.net/api/userlogin', {
                    method: 'GET',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                })
                .then( response => {
                    alert('Login Efetuado com sucesso')
                })
                .then(() => {
                    navigation.navigate('Tab');
                })
                .catch(err => {
                    console.error('Login não efetuado', err);
                    alert('Email ou senha incorretos');
                })
            })
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../../assets/MyService_Logo.png')} style={styles.Logo} />
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.containerInput}>
                <View style={styles.emailArea}>
                    <View style={styles.emailIcon}>
                        <AntDesign name="mail" size={24} color="blue" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' onChange={setEmail} />
                </View>
                <View style={styles.passwordArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setPassword(texto)}
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
            <View style={{ top: 45, flexDirection: "row" }}>
                <Switch
                    trackColor={{ false: 'gray', true: '#0A3DC2' }}
                    thumbColor={isEnable ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor='gray'
                    onValueChange={tootleSwitch}
                    value={isEnable}
                    style={{ right: 30 }}
                />
                <Text style={{ top: 15, right: 30 }}>Lembre-me</Text>
                <TouchableOpacity style={{ top: 15, left: 30 }}>
                    <Text>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Tab')}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={{ fontSize: 18 }}>Ou</Text>
            </View>
            <View style={styles.SocialMedia}>
                <TouchableOpacity style={styles.buttonGoogle} onPress={showAlert}>
                    <Image source={require('../../../../../assets/google-icon.png')} style={styles.google} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFacebook}>
                    <Image source={require('../../../../../assets/facebook.png')} style={styles.facebook} />
                </TouchableOpacity>
            </View>
            <View style={styles.textCadastro}>
                <Text>Não tenho conta!</Text>
                <TouchableOpacity onPress={() => CadastroScreen()}>
                    <Text style={{ fontWeight: 'bold' }}> Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}