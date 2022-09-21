import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetFlags } from '../hooks/useGetFlags.js'

const Home = () => {

    const { } = useGetFlags();

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})