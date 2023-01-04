import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FlipCard from "../../components/FlipCard";
import { FlatList } from 'react-native-gesture-handler';
import NavigationService from '../../helpers/NavigationService';

const Home = () => {
    const data = [
        { id: 1, title: 'Cards', onNavigation: 'Cards', urlImage: 'https://cdn-icons-png.flaticon.com/512/4359/4359914.png' },
        { id: 2, title: 'Text Input', onNavigation: 'TextInputs', urlImage: 'https://cdn-icons-png.flaticon.com/512/7604/7604002.png' },
        { id: 3, title: 'Calender', onNavigation: 'Calenders', urlImage: 'https://cdn-icons-png.flaticon.com/512/8876/8876545.png' },
        { id: 4, title: 'Modal', onNavigation: 'Modals', urlImage: 'https://cdn-icons-png.flaticon.com/512/6604/6604292.png' },
    ]
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingVertical: 20 }}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <Text style={styles.title}>RN CUSTOM COMPONENTS</Text>
            <FlatList
                contentContainerStyle={{ alignItems: 'center' }}
                data={data}
                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={(({ item }) => (
                    <FlipCard
                        text={item.title}
                        backgroundColor={'#439A97'}
                        fontColor='#fff'
                        urlImage={item.urlImage}
                        onNavigation={() => NavigationService.navigate(item.onNavigation)}
                    />
                ))}
            />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '800',
        color: '#439A97',
        marginBottom: 10
    }
})