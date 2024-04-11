import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Bai1 from './bai1';
import Index from '.';
import Bai3 from './bai3';

const Stack = createStackNavigator();

export default function Navigation_lab1() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LAB1' component={Index} />
            <Stack.Screen name='Bai1' component={Bai1} />
            <Stack.Screen name='Bai3' component={Bai3} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

