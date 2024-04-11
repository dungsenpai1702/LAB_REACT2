import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Index_lab4({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Text>index_lab4</Text>

            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('lab41') }}
            >Bài 1</Text>
            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('lab42') }}
            >Bài 2</Text>
            <Text style={{ marginVertical: 30, color: 'black', fontSize: 36, fontWeight: 'bold' }}
                onPress={() => { navigation.navigate('lab43') }}
            >Bài 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({})