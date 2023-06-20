import React from "react";
import { ChecarLoginUsuario } from "../SalvarJWT/AuthContext";
import { useNavigation } from "@react-navigation/native";

async function VerifyLogin(){

    //Navegação após verificar login
    const navigation = useNavigation();

    //Constante para verificar token do usuario
    const usuariologado = await ChecarLoginUsuario();
    if (usuariologado) {
        navigation.navigate('Tab');
    }

};

export default VerifyLogin;