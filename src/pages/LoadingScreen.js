import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
    return (
        <SafeAreaView
            styles={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ActivityIndicator
                size={50}
                color="red"
            />
        </SafeAreaView>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})