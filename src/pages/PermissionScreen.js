import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core'
import { check, PERMISSIONS, request } from 'react-native-permissions'

const PermissionScreen = () => {

    let permissionStatus;
    const checkLocationPermission = async () => {
        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        console.log('permissionStatus ', permissionStatus)
    }

    return (
        <View style={styles.container}>
            <Text>PermissionScreen</Text>

            <Button
                title="Pedir Permiso"
                onPress={checkLocationPermission}
            />
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