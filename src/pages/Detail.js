import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import SimpleList from '../components/SimpleList';
import { useSelector } from 'react-redux';
import { formatDate, parseDate, restardias, validarSwitch } from '../utils/functions';
import { fetchApiEffect } from '../utils/api';
import { FlatList } from 'react-native-gesture-handler';
import IndicatorSekeleton from './IndicatorSekeleton';

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { params } = route;
    const { title } = params;
    let response;

    const { itemSelected } = useSelector(state => state.flags);
    const { name, id } = itemSelected;

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    const {
        error: indicatorListError,
        data: indicatorList,
        loading: indicatorListLoading,
    } = fetchApiEffect(validarSwitch(name));

    if (indicatorList) {
        response = indicatorList[id];
    }

    return (
        <View>
            <FlatList
                data={response}
                keyExtractor={(item, key) => key}
                renderItem={({ item, index }) => {
                    return (
                        <SimpleList data={item} />
                    )
                }}
                ListEmptyComponent={<IndicatorSekeleton />}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})