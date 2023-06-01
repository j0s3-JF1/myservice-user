import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    PixelRatio,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default function Avaliacao() {

    //rotas + parametro
    const route = useRoute();
    const { ident } = route.params;

    //Navegação
    const navigation = useNavigation();

    //Tamanho da input de comentario
    const [inputHeight, setHeight] = useState("");

    //Envio de comentario
    const [comentario, setComentario] = useState("");

    const body = { id: 1 , comentario }

    function Comentario() {

        if( comentario == "" ){

            alert('Insira a sua avaliação antes de enviar!')

        }else{   
            fetch('https://my-service-server.azurewebsites.net/api/AvaliacaoProdutoE', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            .then((response) => {
                alert('Comentario enviado com sucesso!');
            })
            .then(() => navigation.navigate('ProductView'))
            .catch((err) => {
                console.log(err);
                alert('Comentario não foi enviado')
            })
        }
    }

    function teste(){
        console.log(ident)
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(25)
                }}
            >
                <Text
                    style={{
                        color: 'blue',
                        fontSize: 25,
                        fontWeight: '700',
                        textAlign: 'center',
                        width: '90%'
                    }}
                >
                    Avalie o Nosso Produto no Campo Abaixo:
                </Text>
                <View
                    style={{
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                    }}
                >
                    <TextInput
                        style={{
                            fontWeight: '500',
                            textAlign: 'left',
                            width: '70%',
                            fontSize: 15,
                            backgroundColor: '#FFF',
                            elevation: 2,
                            top: PixelRatio.getPixelSizeForLayoutSize(5),
                            borderRadius: 10
                        }}
                        placeholder="Insira a sua Avaliação"
                        multiline
                        onChangeText={(texto) => setComentario(texto)}
                        onContentSizeChange={({
                            nativeEvent: {
                                contentSize: { inputHeight }
                            }
                        }) => {
                            setHeight(inputHeight)
                        }}
                        maxLength={200}
                    />
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '20%',
                            backgroundColor: '#FFF',
                            elevation: 5,
                            borderRadius: 10,
                            top: PixelRatio.getPixelSizeForLayoutSize(5)
                        }}
                        onPress={Comentario}
                    >
                        <Ionicons
                            name="send"
                            color={'blue'}
                            size={23}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: 'brown',
                        width: '90%',
                        height: 1,
                        top: PixelRatio.getPixelSizeForLayoutSize(10)
                    }}
                />
            </View>
            <Text
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(80),
                    fontSize: 20,
                    width: '70%',
                    textAlign: 'center',
                    color: 'blue',
                    fontWeight: '500'
                }}
            >
                Veja as Avaliações de outros usuarios:
            </Text>
            <ScrollView
                style={{
                    width: '100%',
                    top: PixelRatio.getPixelSizeForLayoutSize(95),
                    height: 500
                }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#FFF',
                            width: '70%',
                            height: PixelRatio.getPixelSizeForLayoutSize(30),
                            justifyContent: 'center',
                            borderRadius: 10,
                            elevation: 2,
                            margin: PixelRatio.getPixelSizeForLayoutSize(2)
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: PixelRatio.getPixelSizeForLayoutSize(3)
                            }}
                        >
                            Avaliação
                        </Text>
                    </View>
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
        backgroundColor: '#F8F8F8'
    },
})