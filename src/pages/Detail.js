import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const Detail = () => {
    const navigation = useNavigation();

    const route = useRoute();
    const { params } = route;
    const { data } = params;

    useEffect(() => {
        navigation.setOptions({
            title: data?.title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    return (
        <View>
            <Text>asasa</Text>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})