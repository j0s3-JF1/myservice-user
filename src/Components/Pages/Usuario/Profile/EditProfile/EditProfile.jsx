import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.EditButton} onPress={() => navigation.navigate('Edit')}>
            <FontAwesome5 name="user-edit" size={25} color={"#0A3DC2"}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    EditButton:{
        backgroundColor: '#FFF',
        width: '10%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 2,
        top: '10%'
    },
})

export default EditProfile;