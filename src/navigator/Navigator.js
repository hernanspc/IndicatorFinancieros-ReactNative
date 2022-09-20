import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import MapScreen from '../pages/MapScreen';
import PermissionScreen from '../pages/PermissionScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLargeTitle: true,
                cardStyle: {
                    backgroundColor: 'red'
                }
            }}
        >
            <Stack.Screen name="MapScreen" component={MapScreen} />
            <Stack.Screen name="PermissionScreen" component={PermissionScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})