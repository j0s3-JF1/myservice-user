import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

//Importe de telas
import Home from "../Pages/Usuario/Home/Home";
import Search from "../Pages/Usuario/Search/Search";
import Liked from "../Pages/Usuario/Liked/Liked";
import Profile from "../Pages/Usuario/Profile/Profile";

export default function Tabs() {
    //Remover cor de fundo do tabs ao selecionar
    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent";

    //Constante para navegação do Tabs
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            theme={{ colors: { secondaryContainer: "transparent" } }}
            barStyle={{ backgroundColor: "#FFF" }}
            labeled={true}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="home" color={"#0A3DC2"} size={25} />
                    ),
                }}

            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="search" color={"#0A3DC2"} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Liked"
                component={Liked}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Ionicons name="heart" color={"#0A3DC2"} size={25} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <AntDesign name="user" color={"#0A3DC2"} size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}