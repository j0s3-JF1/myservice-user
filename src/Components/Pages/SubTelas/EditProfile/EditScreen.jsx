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
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}>
                Editar perfil
            </Text>
            <View style={{
                width: '80%',
                height: 2,
                backgroundColor: '#000'
            }}></View>
            <View style={{
                top: '2%',
            }}>
                <ProfilePic/>
            </View>
            <Text style={{
                top: '3%',
                fontSize: 20,
                fontWeight: 'bold'
            }}>
                Fernando Barbosa
            </Text>
            <View style={{
                width: '80%',
                height: 2,
                backgroundColor: '#000',
                top: '5%'
            }}></View>
            <>
                <View style={{
                    top: '7%',
                    right: '30%',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Nome:</Text>
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="user" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' />
                </View>
            </>
            <>
                <View style={{
                    top: '7%',
                    right: '30%',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Email:</Text>
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="mail" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' />
                </View>
            </>
            <>
                <View style={{
                    top: '7%',
                    right: '30%',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Senha:</Text>
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="lock" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' />
                </View>
            </>
            <>
                <View style={{
                    top: '7%',
                    right: '27%',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700'
                    }}>Telefone:</Text>
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="phone" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' />
                </View>
            </>
            <View style={{top: '10%', width: '60%', height: '7%'}}>
                <TouchableOpacity style={styles.buttonUpdate}>
                    <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 20}}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}