import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    PixelRatio,
    StyleSheet,
    ScrollView,
} from "react-native";

//Importe de componente
import WorkButton from "./ButtonService/WorkButton";
import EnterpriseButton from "./ButtonService/EnterpriseButton";

export default function SearchResult() {
    const route = useRoute();

    const { categoria } = route.params;

    //Mudança de visualização de tela
    const [search, setSearch] = useState(true);

    const toogleSearch = () => {
        setSearch(!search);
    }

    //Resultado dos servicos do Trabalhador
    const [trabalho, setTrabalho] = useState([]);
    const [enterprise, setEnterprise] = useState([]);

    async function Itens() {
        
        //Resultado dos serviços trabalhador
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/Categoriap_/Trabalhador?categoria=' + categoria, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setTrabalho(json))
                .catch((err) => {
                    console.log(err);
                    alert(err);
                })
        }, []);

        //Resultado dos serviços de Empresa
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/Categoriap_/Empresa?categoria=' + categoria, {
                method: 'GET'
            })
                .then((response) => response.json())
                .then((json) => setEnterprise(json))
                .catch((err) => {
                    console.log(err);
                    alert('Nenhum Serviço Encontrado');
                })
        }, []);

    }

    useEffect(() => {
        Itens();
    }, [])

    return (
        <View
            style={styles.container}
        >
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    width: '100%',
                    top: PixelRatio.getPixelSizeForLayoutSize(25)
                }}
            >
                <Text
                    style={{
                        color: '#0A3DC2',
                        fontWeight: '900',
                        fontSize: 20,
                        textAlign: 'left'
                    }}>
                    Pesquisa: {categoria}
                </Text>
                <View style={{
                    backgroundColor: '#000',
                    width: '80%',
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                }} />
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: '5%'
                    }}
                >
                    <TouchableOpacity
                        disabled={search}
                        onPress={toogleSearch}
                        style={{
                            backgroundColor: '#0A3DC2',
                            width: '20%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            elevation: 5,
                        }}
                    >
                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 'bold'
                            }}
                        >
                            Autonomo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!search}
                        onPress={toogleSearch}
                        style={{
                            backgroundColor: '#FFF',
                            width: '20%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            elevation: 5,
                        }}
                    >
                        <Text
                            style={{
                                color: '#0A3DC2',
                                fontWeight: 'bold'
                            }}
                        >
                            Empresa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                style={{
                    width: '100%',
                    top: PixelRatio.getPixelSizeForLayoutSize(50)
                }}
            >
                <View
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(50),
                    }}
                >
                    {
                        search ?
                            trabalho?.map((trabalhador, index) => (
                                <WorkButton
                                    trabalhador={trabalhador}
                                    key={index}
                                />
                            ))
                            :
                            enterprise?.map((empresa, index) => (
                                <EnterpriseButton
                                    empresa={empresa}
                                    key={index}
                                />
                            ))
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F8F8F8',
    }
})