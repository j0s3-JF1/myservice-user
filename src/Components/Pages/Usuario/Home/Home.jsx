import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from "react-native";
import { Ionicons } from '@expo/vector-icons';

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
import VisitAPI from './VisitButton/API/VisitAPI';
import FindAPI from './FindButton/API/FindAPI';
import AvaliateAPI from './AvaliateButton/API/AvaliateAPI';

export default function Home() {

    //Conexão com API -> Ultimos Procurados
    const [find, setFind] = useState([]);
    //URL -> Ultimos Procurados
    const URLfind = "https://myserviceserver.azurewebsites.net/api/empresa";

    useEffect(() => {
        fetch(URLfind, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setFind(json))
            .catch((error) => {
                console.log(error)
                alert('Não houve busca')
            })
    }, []);

    //Conexão com API -> Ultimos visitados
    const [visit, setVisit] = useState([]);
    //URL -> Ultimos visitados
    const URLvisit = "https://myserviceserver.azurewebsites.net/api/categorias_";

    useEffect(() => {
        fetch(URLvisit, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((json) => setVisit(json))
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

    //constante para carregamento de página
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