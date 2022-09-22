import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import colors from '../constants/colors';
import { useRoute } from '@react-navigation/native';

const SimpleList = ({ index }) => {
    const colorScheme = useColorScheme();
    const route = useRoute();
    const { params } = route;

    return (
        <View style={styles.container}>
            <View style={styles.wrapperDate}>
                <Text style={{ color: colors[colorScheme].tintIos }}>FECHA</Text>
            </View>
            <View style={styles.wrapperMonto}>
                <Text>{index}</Text>
            </View>
        </View>
    )
}

export default SimpleList

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#CBCBCB",
        marginHorizontal: 20,
    },
    wrapperDate: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: "50%",
        height: "100%",
    },
    wrapperMonto: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "50%",
        height: "100%",
    }
})