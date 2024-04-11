import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Index_lab3({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>index_lab3</Text>

            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('bai1') }}
            >Bài 1</Text>
            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('bai2') }}
            >Bài 2</Text>
            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('bai3') }}
            >Bài 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({})