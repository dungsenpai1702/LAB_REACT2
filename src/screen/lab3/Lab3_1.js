import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { H, W } from '../../constants/theme'
export default function Lab3_1() {
    const [transLY, setTransLY] = useState(Math.floor(Math.random() * (H * 0.9)))
    const [transLY2, setTransLY2] = useState(Math.floor(Math.random() * (H * 0.4)))
    const [transLX, setTransLX] = useState(Math.floor(Math.random() * (W * 0.4)))
    const randomTranLY = () => {
        setTransLY(Math.floor(Math.random() * (H * 0.7)))
        setTransLY2(Math.floor(Math.random() * (H * 0.7)))
        setTransLX(Math.floor(Math.random() * (W * 0.5)))
    }
    const styleAnimatedTranslateY = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: withSpring(transLY) }]
        }
    })
    const styleAnimatedTranslateXandY = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: withSpring(transLY2 / 2) },
                { translateX: withSpring(transLX) }
            ]
        }
    })
    return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
            <Animated.Text style={[{ width: 80, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#ffcc99', margin: 'auto' }, styleAnimatedTranslateXandY]}
                onPress={randomTranLY}
            >
                Move
            </Animated.Text>
            <Animated.View style={[{ width: 80, height: 80, borderRadius: 10, backgroundColor: '#99ccff' }, styleAnimatedTranslateY]}>

            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({})