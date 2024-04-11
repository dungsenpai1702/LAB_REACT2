import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Navigation_lab1 from './src/screen/lab1/navigation_lab1';
import Index from './src/screen';
import Main_lab2 from './src/screen/lab2/Main';
import Navigation_lab3 from './src/screen/lab3/Navigation_lab3';
import Navigation_Lab4 from './src/screen/lab4/Navigation_Lab4';
const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='menuLab' component={Index} />
        <Stack.Screen name='lab1' component={Navigation_lab1} />
        <Stack.Screen name='lab2' component={Main_lab2} />
        <Stack.Screen name='lab3' component={Navigation_lab3} />
        <Stack.Screen name='lab4' component={Navigation_Lab4} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})