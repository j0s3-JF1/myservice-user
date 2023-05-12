import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native-web";

const ProfilePicture = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                {image && <Image source={{ uri: image }} style={{ width: 130, height: 130, borderRadius: 100 }} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    profileButton: {
        width: 150,
        height: 150,
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        borderRadius: 50
    },
})

export default ProfilePicture;