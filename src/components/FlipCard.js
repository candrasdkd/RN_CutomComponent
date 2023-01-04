import React, { useState } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, Animated, Image } from 'react-native';

function Card({ text, urlImage, backgroundColor, fontColor, onNavigation, height, width, fontSize }) {
    const [animation] = useState(new Animated.Value(0));

    const animateCard = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start();
            onNavigation && onNavigation()
        });
    };

    const animatedStyles = {
        transform: [
            {
                rotateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '180deg'],
                }),
            },
        ],
    };

    return (
        <TouchableWithoutFeedback onPress={animateCard}>
            <Animated.View
                style={[
                    styles.card,
                    animatedStyles,
                    {
                        backgroundColor: backgroundColor ? backgroundColor : 'white',
                        height: height ? height : 150,
                        width: width ? width : 150,
                    }]}>
                <Image
                    source={{ uri: urlImage }}
                    style={{
                        height: '50%',
                        width: '50%',
                    }} />
                <Text style={[styles.text, { color: fontColor ? fontColor : '#000', fontSize }]}>{text}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: '500'
    },
});

export default Card;
