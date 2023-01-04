import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';

const FadeInCard = ({ title, urlImage, onNavigation, height, width, fontSize }) => {
    const [fadeAnim] = useState(new Animated.Value(0));  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, []);
    console.log('urlImage',);
    return (
        <Animated.View                 // Special animatable View
            style={{
                ...styles.card,
                opacity: fadeAnim,
                height: height ? height : 150,
                width: width ? width : 150,        // Bind opacity to animated value
            }}
        >
            <TouchableOpacity onPress={onNavigation} style={styles.button}>
                {urlImage &&
                    <Image
                        source={{ uri: urlImage }}
                        style={{ height: '60%', width: '60%' }}
                        resizeMode={'cover'} />
                }
                {title && <Text style={[styles.text, { fontSize }]}>{title}</Text>}
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#6C00FF',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        color: '#fff'
    },
});

export default FadeInCard;
