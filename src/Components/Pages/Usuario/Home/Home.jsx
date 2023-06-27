import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    FlatList,
    PixelRatio,
    RefreshControl
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

    //Carregamento de Tela
    const [isLoading, setLoading] = useState(true);

    //Recarregamento de tela
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = async () => {
        setRefreshing(true);
    
        const fetchData = async () => {
            try {
                const responseFind = await fetch(URLfind, {
                    method: 'GET'
                });
                const jsonFind = await responseFind.json();
                setFind(jsonFind);
                setLoading(false);
            } catch (error) {
                console.log(error);
                alert('Não houve busca');
            }
    
            try {
                const responseVisit = await fetch(URLvisit, {
                    method: 'GET'
                });
                const jsonVisit = await responseVisit.json();
                setVisit(jsonVisit);
                setLoading(false);
            } catch (error) {
                console.log(error);
                alert('Não houve ultimos visitados');
            }
        };
    
        try {
            await fetchData();
        } catch (error) {
            console.log(error);
            // Tratar erro geral, se necessário
        }
    
        setTimeout(() => {
            // Verifique se os dados foram carregados com sucesso
            if (find.length > 0 && visit.length > 0) {
                setRefreshing(false);
            } else {
                alert('Dados não carregados')
            }
        }, 3000);
    };

    //Conexão com API -> Ultimos Procurados
    const [find, setFind] = useState([]);
    const [visit, setVisit] = useState([]);

    //URL -> Ultimos Procurados
    const URLfind = "https://my-service-server.azurewebsites.net/api/Listaworkers";
    //URL -> Ultimos visitados
    const URLvisit = "https://my-service-server.azurewebsites.net/api/categorias_";

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
    }, []);

    //Constante de listas vindas da API Local
    const [avaliateList, setAvaliateList] = useState(AvaliateAPI);

    if (isLoading)
        return (
            <Loading />
        );

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
            }
        >
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: '2%',
                width: '100%',
                height: 900
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
                            visit?.map((visits, index) => (
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
                            find?.map((finds, index) => (
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