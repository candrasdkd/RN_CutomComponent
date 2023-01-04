import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationService from '../helpers/NavigationService'

const CommonHeader = ({ title }) => {
    return (
        <View style={{ backgroundColor: '#fff', height: 60, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Button title="Back" onPress={() => NavigationService.back()} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#439A97' }}>{title}</Text>
        </View>
    )
}

export default CommonHeader

const styles = StyleSheet.create({})