import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Animated } from "react-native";

const FloatingTextInput1 = ({ title, value, onChangeText }) => {
    const [floatingAnim] = useState(new Animated.Value(0));
    const [isFocus, setIsFocus] = useState(false);
    const toggleFloating = () => {
        if (value) {
            Animated.timing(floatingAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false
            }).start();
        } else if (isFocus) {
            Animated.timing(floatingAnim, {
                toValue: 1,
                duration: 250,
                useNativeDriver: false

            }).start();
        } else {
            Animated.timing(floatingAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false
            }).start();
        }
    };

    const floatingLabel = floatingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [25, -5],
    });

    const floatingLabelColor = floatingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["#aaa", "#000"],
    });
    useEffect(() => { toggleFloating() }, [value, isFocus])
    return (
        <View style={styles.container}>
            <Animated.Text
                style={[
                    styles.floatingLabel,
                    { top: floatingLabel, color: floatingLabelColor }
                ]}
            >
                {title}
            </Animated.Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                onBlur={() => setIsFocus(false)}
                onFocus={() => setIsFocus(true)}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        width:'100%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 40,
        fontSize: 16,
    },
    floatingLabel: {
        position: "absolute",
        left: 0,
        fontSize: 16
    }
});

export default FloatingTextInput1;
