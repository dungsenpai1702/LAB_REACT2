import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/theme'

export default function ButtonCustomer({ w, h, bg, lable, color, mv, onPress }) {
    // console.log(w, h, bg, lable, color);
    return (
        <TouchableOpacity style={[{ width: `${w}%`, height: h, marginVertical: mv }, st.shadow]} onPress={onPress}>
            <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: bg }}>
                <Text style={{ color: color, fontWeight: '700' }}>{lable}</Text>
            </View>
        </TouchableOpacity>
    )
}

const st = StyleSheet.create({
    shadow: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10
    },
})