import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    FlatList,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

//Importe de estilização
import styles from "./Style";

//Importe componentes
import FindButton from "./FindButton/FindButton";
import VisitButton from "./VisitButton/VisitButton";
import AvaliateButton from "./AvaliateButton/AvaliateButton";
import VisitMore from "./Veja Mais/VisitMore/VisitMore";
import FindMore from "./Veja Mais/FindMore/FindMore";
import Loading from "../../../Loading/Loading";
import AvaliateMore from "./Veja Mais/AvaliateMore/AvaliateMore";

//Importação de API´s
import AvaliateAPI from './AvaliateButton/API/AvaliateAPI';

export default function Home() {

    const [isLoading, setLoading] = useState(true);

    //Conexão com API -> Ultimos Procurados
    const [find, setFind] = useState([]);
    //URL -> Ultimos Procurados
    const URLfind = "https://my-service-server.azurewebsites.net/api/empresa";

    useEffect(() => {
        fetch(URLfind, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setFind(json))
            .then(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                alert('Não houve busca')
            })
    }, []);

    //Conexão com API -> Ultimos visitados
    const [visit, setVisit] = useState([]);
    //URL -> Ultimos visitados
    const URLvisit = "https://my-service-server.azurewebsites.net/api/categorias_";

    useEffect(() => {
        fetch(URLvisit, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setVisit(json))
            .then(() => setLoading(false))
            .catch((error) => {
                console.log(error)
                alert('Não houve ultimos visitados')
            })
    }, [])

    // //Conexão com API -> Melhores Avaliados
    // const [avaliate, setAvaliate] = useState([]);
    // // URL -> Melhores Avaliados
    // const URLavaliate = " ";

    // useEffect(() => {
    //     fetch(URLavaliate, {
    //         method: 'GET'
    //     })
    //     .then((response) => response.json())
    //     .then((json) => setAvaliate(json))
    //     .catch((error) => {
    //         console.log(error)
    //         alert('Não há avaliados')
    //     })
    // }, [])


    //Constante de listas vindas da API Local
    const [avaliateList, setAvaliateList] = useState(AvaliateAPI);

    //localização do usuario
    async function requestLocationPermission() {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Permissão de Localização',
                        message: 'Este aplicativo precisa acessar sua localização.',
                        buttonNeutral: 'Pergunte-me depois',
                        buttonNegative: 'Cancelar',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Permissão de localização concedida');
                } else {
                    console.log('Permissão de localização negada');
                }
            } catch (err) {
                console.warn(err);
            }
        } else if (Platform.OS === 'ios') {
            // Solicitar permissão de localização para dispositivos iOS
        }

        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log('Latitude:', latitude);
                console.log('Longitude:', longitude);
            },
            (error) => {
                console.warn('Erro ao obter a localização:', error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }


    if (isLoading)
        return (
            <Loading />
        );

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: '2%',
                width: '100%',
                height: 900,
            }}>
                <View>
                    <View style={{ bottom: '50%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="location" size={30} color='#000' />
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Santana de Parnaiba - SP</Text>
                        </View>
                    </View>
                    <View style={styles.Search}>
                        <View style={styles.iconSearch}>
                            <Ionicons name="search" size={25} color='#0A3DC2' />
                        </View>
                        <TextInput placeholder="Pesquisar" style={styles.inputSearch} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', bottom: '4%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', right: 70 }}>Ultimos Visitados</Text>
                    <VisitMore />
                </View>
                <View style={{ flexDirection: 'row', bottom: '1%', left: 10, }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            visit.map((visits, index) => (
                                <VisitButton visits={visits} key={index} />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', top: '7%' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', right: 70 }}>Mais Procurados</Text>
                    <FindMore />
                </View>
                <View style={{ flexDirection: 'row', top: '10%', left: 10 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            find.map((finds, index) => (
                                <FindButton finds={finds} key={index} />
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', top: '17%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', right: 50 }}>Melhores Avaliados</Text>
                    <AvaliateMore />
                </View>
                <View style={{ flexDirection: 'row', top: '20%', left: 10 }}>
                    <ScrollView horizontal>
                        <FlatList
                            horizontal
                            style={{
                                width: '100%',
                                height: '100%',

                            }}
                            data={avaliateList}
                            renderItem={({ item }) => {
                                return (
                                    <AvaliateButton data={item} />
                                )
                            }}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={true}
                        />
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
}