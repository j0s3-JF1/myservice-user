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
        </Stack.Navigator>
    );
}