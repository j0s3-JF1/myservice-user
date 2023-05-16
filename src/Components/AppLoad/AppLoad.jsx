import React, { Component } from "react";
import { View, Image, Animated, Easing, StyleSheet } from "react-native";

class AppLoad extends Component {
    constructor(props) {
        super(props);
        this.opacityValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.opacityValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(this.opacityValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }

    render() {
        const opacity = this.opacityValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#0A3DC2',
                }}
            >
                <Animated.Image
                    source={require('../../../assets/MyService_white.png')}
                    style={{
                        opacity,
                        width: '45%',
                        height: '15%',
                        resizeMode: 'stretch',
                    }}
                />
                <Image
                    source={require('../../../assets/retangle1.png')}
                    style={{
                        position: 'absolute',
                        top: '75%'
                    }}
                />
                <Image
                    source={require('../../../assets/retangle2.png')}
                    style={{
                        position: 'absolute',
                        top: '60%',
                        left: '80%'
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        resizeMode: 'stretch',
        width: '50%',
        height: 20,
    },
})

export default AppLoad;