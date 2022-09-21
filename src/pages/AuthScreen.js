import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

const AuthScreen = () => {
    const dispatch = useDispatch();

    const signIn = () => {

        dispatch(signIn(user));
    }

    return (
        <View>
            <Text>AuthScreen</Text>

        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})