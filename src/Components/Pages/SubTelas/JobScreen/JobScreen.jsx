import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import ProfilePicture from "../../../ProfilePic/ProfilePicture";
import Loading from "../../../Loading/Loading";
import Servico from "./Servico/Servico";
import Trabalho from "./Produto/Produto";

export default function JobScreen() {

    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    //constante de rotas
    const route = useRoute();

    //constante de valores vindo das rotas
    const { id, nome, empresa } = route.params;

    //Carregar tela
    const [isLoading, setLoading] = useState(true);

    //Produtos e serviços
    const [trabalhos, setTrabalho] = useState([]);

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/empresaproduto?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setTrabalho(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum Produto')
            })
    }, []);

    //Pegar Serviços do usuario
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        fetch('https://myserviceserver.azurewebsites.net/api/empresaservico?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setServicos(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum serviço');
            })
    }, []);

    if (isLoading)
        return (
            <Loading />
        );

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        }}>
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(50)
            }}>
                <View
                    style={{
                        backgroundColor: '#FFF',
                        width: PixelRatio.getPixelSizeForLayoutSize(55),
                        height: PixelRatio.getPixelSizeForLayoutSize(55),
                        borderRadius: 100,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={require('../../../../../assets/eletricista.jpeg')}
                        style={{
                            borderRadius: 100,
                            width: PixelRatio.getPixelSizeForLayoutSize(50),
                            height: PixelRatio.getPixelSizeForLayoutSize(50),
                            resizeMode: 'stretch',
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        top: '1%'
                    }}
                >
                    {nome}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '300',
                        top: '1%'
                    }}
                >
                    {empresa}
                </Text>
                <View style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(130),
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                    backgroundColor: '#9F9999',
                    top: PixelRatio.getPixelSizeForLayoutSize(10),
                }}></View>
                <View style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(5),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        style={styles.buttonGrafic}
                        disabled={changeScreen}
                        onPress={toogleScreen}
                        activeOpacity={0.6}
                    >
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAvaliate}
                        disabled={!changeScreen}
                        onPress={toogleScreen}
                        activeOpacity={0.6}
                    >
                        <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Serviços</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(140),
                    width: '100%',
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    width: '100%',
                    height: 1100,
                    alignItems: 'center'
                }}>
                    {
                        changeScreen ?
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                {
                                    trabalhos.map((work, index) => (
                                        <Trabalho work={work} key={index} />
                                    ))
                                }
                            </View>
                            :
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                {
                                    servicos.map((service, index) => (
                                        <Servico service={service} key={index} />
                                    ))
                                }
                            </View>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    titleName: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    buttonGrafic: {
        backgroundColor: '#3D68D9',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },

    buttonAvaliate: {
        backgroundColor: '#FFF',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },
})