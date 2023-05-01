import React from "react";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

//Importação de telas
import Home from "../Pages/Usuario/Home/Home";
import Search from "../Pages/Usuario/Search/Search";
import Liked from "../Pages/Usuario/Liked/Liked";

//Importe de componente
import NewButton from "./NewButton/NewButton";

export default function TabsWork() {

    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent";

    const Tab = createMaterialBottomTabNavigator();

    return(
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
            name="Novo"
            component={Liked}
            options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ size, color }) => (
                    <NewButton size={size} color={color} />
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
    </Tab.Navigator>
    );
}