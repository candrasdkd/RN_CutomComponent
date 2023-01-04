import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommonModal = ({ modalVisible, children, closeModal }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
            onDismiss={closeModal}
            statusBarTranslucent
        >
            <View style={styles.backgroundTransparent}>
                <View style={styles.modalContent}>
                    {children}
                    <View style={{ position: 'absolute', bottom: 10, width:'100%', alignSelf:'center',backgroundColor:'red' }}>
                        <Button onPress={closeModal} title="Close Modal"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CommonModal

const styles = StyleSheet.create({
    backgroundTransparent: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '85%',
        height: '60%',
        borderRadius:10,
        padding:25
    },
})