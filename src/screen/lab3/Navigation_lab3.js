import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Lab3_1 from './Lab3_1';
import Lab3_2 from './Lab3_2';
import Index_lab3 from './Index_lab3';
import Lab3_3 from './Lab3_3';


const Stack = createStackNavigator();
export default function Navigation_lab3() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index_lab3' component={Index_lab3} />
            <Stack.Screen name='bai1' component={Lab3_1} />
            <Stack.Screen name='bai2' component={Lab3_2} />
            <Stack.Screen name='bai3' component={Lab3_3} />
        </Stack.Navigator>
    )
}