import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

//Importção de componentes
import ProfilePic from '../../Usuario/Profile/ProfilePic/ProfilePicture'

//importe de estilização
import styles from './Style'

export default function EditScreen() {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', bottom: '10%' }}>Editar Perfil</Text>
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                bottom: '10%'
            }}></View>
            <View style={{bottom: '7%'}}>
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
                <TextInput style={styles.Input} placeholder='Nome' placeholderTextColor='#131212' />
            </View>
            <View style={{
                top: '7%',
                right: '30%',
            }}>
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="mail" size={24} color="#A9A9A9" />
                </View>
                <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' />
            </View>
            <View style={{
                top: '7%',
                right: '30%',
            }}>
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="lock" size={24} color="#A9A9A9" />
                </View>
                <TextInput style={styles.Input} placeholder='Senha' placeholderTextColor='#131212' />
            </View>
            <View style={{
                top: '7%',
                right: '27%',
            }}>
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="phone" size={24} color="#A9A9A9" />
                </View>
                <TextInput style={styles.Input} placeholder='Telefone' placeholderTextColor='#131212' />
            </View>
            <View style={{ width: '60%', height: '7%', top: "5%" }}>
                <TouchableOpacity style={styles.buttonUpdate}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}