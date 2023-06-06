import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Importe de telas
import Login from '../Pages/Usuario/Login/Login'
import CadastroUser from '../Pages/Usuario/CadastroUser/CadastroUser'
import Tabs from '../Tabs/TabUser'
import Find from "../Pages/SubTelas/FindScreen/Find";
import Visit from "../Pages/SubTelas/VisitScreen/Visit";
import Avaliate from "../Pages/SubTelas/AvaliateScreen/Avaliate";
import EditScreen from "../Pages/SubTelas/EditProfile/EditScreen";
import JobScreen from "../Pages/SubTelas/JobScreen/JobScreen";
import ForgotPass from "../Pages/SubTelas/ForgotPassScreen/ForgotPass";
import MenuProfile from "../Pages/SubTelas/MenuProfile/MenuProfile";
import ServiceView from "../Pages/SubTelas/JobScreen/Servico/ServiceView/ServiceView";
import ProductView from "../Pages/SubTelas/JobScreen/Produto/ProdutoView/ProdutoView";
import AvaliacaoProduto from "../Pages/SubTelas/JobScreen/Produto/ProdutoView/Avaliação/Avaliacao";
import AvaliacaoServico from "../Pages/SubTelas/JobScreen/Servico/ServiceView/Avaliação/Avaliacao";
import ProductResult from "../Pages/SubTelas/SearchScreen/Product/SearchResult";
import ServiceResult from "../Pages/SubTelas/SearchScreen/Service/SearchResult";

export default function Routes(){
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={CadastroUser}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Tab"
                component={Tabs}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Visit"
                component={Visit}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Find"
                component={Find}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Avaliate"
                component={Avaliate}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Edit"
                component={EditScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Job"
                component={JobScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Forgot"
                component={ForgotPass}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MenuEdit"
                component={MenuProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ServiceView"
                component={ServiceView}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductView"
                component={ProductView}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductAvaliate"
                component={AvaliacaoProduto}
                options={{
                    headerShown: false
                }}

            />
            <Stack.Screen
                name="ServiceAvaliate"
                component={AvaliacaoServico}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductResult"
                component={ProductResult}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="ServiceResult"
                component={ServiceResult}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}