import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonCard = ({ title, urlImage, onNavigation, height, width, fontSize }) => {
    return (
        <TouchableOpacity
            style={[
                styles.card,
                {
                    height: height ? height : 150,
                    width: width ? width : 150
                }
            ]}
            onPress={onNavigation}>
            {urlImage &&
                <Image
                    source={{ uri: urlImage }}
                    style={{ height: '60%', width: '60%' }}
                    resizeMode={'cover'} />
            }
            {title && <Text style={[styles.text, { fontSize }]}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default CommonCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#9D3C72',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#fff'
    },
})