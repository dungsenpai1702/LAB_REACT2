import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Lab4_1 from './Lab4_1';
import Lab4_2 from './Lab4_2';
import Lab4_3 from './Lab4_3';
import Index_lab4 from './Index_lab4';

const Stack = createStackNavigator();

export default function Navigation_Lab4() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index_lab4' component={Index_lab4} />
            <Stack.Screen name='lab41' component={Lab4_1} />
            <Stack.Screen name='lab42' component={Lab4_2} />
            <Stack.Screen name='lab43' component={Lab4_3} />
        </Stack.Navigator>
    )
}