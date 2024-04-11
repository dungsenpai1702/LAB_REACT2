import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Index({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('lab1') }}>
                <Text>Lab 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('lab2') }}>
                <Text>Lab 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('lab3') }}>
                <Text>Lab 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('lab4') }}>
                <Text>Lab 4</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})