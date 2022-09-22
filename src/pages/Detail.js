import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import SimpleList from '../components/SimpleList';
import { useSelector } from 'react-redux';

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;
    const { title } = params;

    const { itemSelected } = useSelector(state => state.flags);

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    return (
        <View>
            <SimpleList />
            <SimpleList />
            <SimpleList />
            <SimpleList />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})