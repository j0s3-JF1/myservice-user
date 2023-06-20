import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    View,
    Text,
    Image,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    Linking,
    Modal,
    SafeAreaView
} from "react-native";
import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ProductView = () => {

    //Navegação
    const navigation = useNavigation();

    //rotas
    const route = useRoute();

    //parametros
    const { id, nome, categoria, descricao, preco, imagem } = route.params

    const params = {
        ident: id,
    }

    //rota para link de rede social
    const LinkInstagram = () => {
        Linking.openURL('https://www.instagram.com/my.service_/');
    }

    const LinkWhatsApp = () => {
        Linking.openURL('https://chat.whatsapp.com/Be0eLWjMPXG22s35ZozdqO');
    }


    return (
        <View style={styles.container}>
            {/* <TouchableOpacity
                style={{
                    bottom: PixelRatio.getPixelSizeForLayoutSize(70),
                    left: PixelRatio.getPixelSizeForLayoutSize(60)
                }}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('ProductAvaliate', params)}
            >
                <MaterialCommunityIcons
                    name="message-star"
                    color={'#F8F8F8'}
                    size={35}
                />
            </TouchableOpacity> */}
            <View
                style={{
                    bottom: PixelRatio.getPixelSizeForLayoutSize(30)
                }}
            >
                <View
                    style={{
                        width: PixelRatio.getPixelSizeForLayoutSize(60),
                        height: PixelRatio.getPixelSizeForLayoutSize(60),
                        backgroundColor: '#FFF',
                        borderRadius: PixelRatio.getPixelSizeForLayoutSize(50),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(55),
                            height: PixelRatio.getPixelSizeForLayoutSize(55),
                            borderRadius: PixelRatio.getPixelSizeForLayoutSize(50)
                        }}

                        source={{uri: imagem}}
                    />
                </View>
            </View>
            <View
                style={{
                    justifyContent: 'flex-start',
                    width: '100%',
                    left: PixelRatio.getPixelSizeForLayoutSize(20),
                    bottom: PixelRatio.getPixelSizeForLayoutSize(10)
                }}
            >
                <Text style={styles.titleNome}>
                    {nome}
                </Text>
                <Text style={styles.titleDesc}>
                    {descricao}
                </Text>
                <Text style={styles.titlePrice}>
                    R$ {preco}
                </Text>
            </View>
            <Image
                source={require('../../../../../../../assets/ellipse2.png')}
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(200),
                    width: PixelRatio.getPixelSizeForLayoutSize(170),
                    height: PixelRatio.getPixelSizeForLayoutSize(115),
                }}
            />
            <Image
                source={require('../../../../../../../assets/elipse1.png')}
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(210),
                    width: PixelRatio.getPixelSizeForLayoutSize(150),
                    height: PixelRatio.getPixelSizeForLayoutSize(80),
                    opacity: 1
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    top: PixelRatio.getPixelSizeForLayoutSize(80),
                    width: '30%',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0A3DC2',
                        width: PixelRatio.getPixelSizeForLayoutSize(12),
                        height: PixelRatio.getPixelSizeForLayoutSize(12),
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={LinkWhatsApp}
                >
                    <FontAwesome
                        name="whatsapp"
                        size={25}
                        color={'#F8F8F8'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0A3DC2',
                        width: PixelRatio.getPixelSizeForLayoutSize(12),
                        height: PixelRatio.getPixelSizeForLayoutSize(12),
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={LinkInstagram}
                >
                    <AntDesign
                        name="instagram"
                        size={25}
                        color={'#F8F8F8'}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A3DC2'
    },

    titleNome: {
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'left',
        width: '70%',
        fontSize: 25,
    },

    titleDesc: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'left',
        width: '70%'
    },

    titlePrice: {
        textAlign: 'left',
        width: '70%',
        color: '#FFF',
        fontWeight: '800'
    },
})

export default ProductView;