import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../../components/CommonHeader'
import CommonModal from '../../components/CommonModal';
import FadeInCard from '../../components/FadeInCard';
import FlipCard from "../../components/FlipCard";
import CommonCard from '../../components/CommonCard';

const Cards = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('')
    const data = [
        { id: 1, title: 'Common Card' },
        { id: 5, title: 'Animasi Fade In' },
        { id: 6, title: 'Animasi Flip' },
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
                {title === 'Common Card' &&
                        <CommonCard
                            title={'COMMON CARD'}
                            urlImage={'https://cdn-icons-png.flaticon.com/512/8995/8995801.png'}
                            onNavigation={() => Alert.alert('GO TO SPACE')}
                            height={300}
                            width={300}
                            fontSize={20}
                        />
                    }
                    {title === 'Animasi Fade In' &&
                        <FadeInCard
                            title={'ANIMASI FADE IN'}
                            urlImage={'https://cdn-icons-png.flaticon.com/512/8995/8995932.png'}
                            onNavigation={() => Alert.alert('GO TO SPACE')}
                            height={300}
                            width={300}
                            fontSize={20}
                        />
                    }
                    {title === 'Animasi Flip' &&
                        <FlipCard
                            text={'ANIMASI FLIP'}
                            urlImage={'https://cdn-icons-png.flaticon.com/512/8995/8995836.png'}
                            backgroundColor={'#FFB100'}
                            fontColor={'#FFF'}
                            height={300}
                            width={300}
                            fontSize={20}
                        />
                    }
                </View>
            </CommonModal>
        </SafeAreaView>
    )
}

export default Cards

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