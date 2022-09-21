import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';

const AuthScreen = () => {
    const dispatch = useDispatch();

    const signIn = () => {
        const user = "juan perez"
        dispatch(signIn(user));
    }

    return (
        <View>
            <Text>AuthScreen</Text>
            <Button title="Empezar" onPress={signIn} />
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})