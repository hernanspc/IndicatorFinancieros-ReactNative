import { StyleSheet, Text, View, Platform } from 'react-native'
import React, { useContext } from 'react'
import { ActivityIndicator, Button } from '@react-native-material/core'
import { check, PERMISSIONS, request } from 'react-native-permissions'
import { PermissionsContext } from '../context/PermissionsContext'

const PermissionScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext)

    return (
        <View style={styles.container}>
            <Text>PermissionScreen</Text>

            <Button
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