import { View, Text } from 'react-native'
import React from 'react'

export default function Index({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => { navigation.navigate('Bai1') }}>Bai1_2</Text>
            <Text onPress={() => { navigation.navigate('Bai3') }}>Bai 3</Text>
        </View>
    )
}