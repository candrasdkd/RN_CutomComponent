import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import CommonModal from '../../components/CommonModal';
import FloatingTextInput1 from '../../components/FloatingTextInput1';

const TextInputs = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const data = [
        { id: 1, title: 'Floating Input 1' },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
            <CommonHeader title={'DESIGN MENU'} />
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={(({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => [setModalVisible(!modalVisible), setTitle(item.title)]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.body}>{'Click to show design'}</Text>
                    </TouchableOpacity>
                ))}
            />
            <CommonModal
                modalVisible={modalVisible}
                closeModal={() => setModalVisible(!modalVisible)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {title === 'Floating Input 1' &&
                        <FloatingTextInput1
                            title={'TITLE'}
                            onChangeText={(text) => setValue(text)}
                            fontSize={20}
                            value={value}
                        />
                    }
                </View>
            </CommonModal>
        </SafeAreaView>
    )
}

export default TextInputs

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#439A97',
        paddingHorizontal: 15,
        borderRadius: 5,
        width: 650 / 2,
        height: 80,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    body: {
        fontSize: 14,
        color: '#fff'
    },

})