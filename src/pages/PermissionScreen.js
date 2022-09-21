import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useContext } from 'react'
import { ActivityIndicator, Button } from '@react-native-material/core'
import { check, PERMISSIONS, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'
import BlackButton from '../components/BlackButton'

const PermissionScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View style={styles.container}>
            <Text>Es necesario del uso del GPS para esta app</Text>

            <BlackButton
                title="Pedir Permiso"
                onPress={askLocationPermission}
            />

            <Text>{JSON.stringify(permissions, null, 5)}</Text>
        </View>
    )
}

export default PermissionScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})