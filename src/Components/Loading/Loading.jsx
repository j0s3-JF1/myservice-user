import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native";

const Loading = () => {
    return (
        <View style={{
            widht: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F8F8F8'
        }}>
            <ActivityIndicator
                size="large"
                color={'#0A3DC2'}
                animating={true}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute'
                }}
            />
        </View>
    );
}

export default Loading;