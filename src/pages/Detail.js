import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import SimpleList from '../components/SimpleList';
import { useSelector } from 'react-redux';
import { formatDate, parseDate, restardias } from '../utils/functions';
import { fetchApiEffect } from '../utils/api';
import { FlatList } from 'react-native-gesture-handler';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const [data, setData] = useState([])
    const { params } = route;
    const { title } = params;

    const { itemSelected } = useSelector(state => state.flags);

    //TODO: ULTIMO 30 DIAS dólar, euro y UF
    //TODO: del año actual para el IPC y la UTM.

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    //RESTAR DIAS A UNA FECHA

    // console.log('restardias ', restardias(30))

    const validar = (param) => {
        // console.log('param ', param)
        switch (param) {
            case 'dolar':
                return "https://api.cmfchile.cl/api-sbifv3/recursos_api/dolar/posteriores/2022/08/dias/20?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json";
            case 'euro':
                return "https://api.cmfchile.cl/api-sbifv3/recursos_api/euro/posteriores/2022/08/dias/20?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json";
            case 'uf':
                return "https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/posteriores/2022/08/dias/20?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json";
            case 'ipc':
                return "https://api.cmfchile.cl/api-sbifv3/recursos_api/ipc/2022?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json"
            case 'utm':
                return "https://api.cmfchile.cl/api-sbifv3/recursos_api/utm/2022?apikey=bf6b491ec46caf655a1204c927f559580679f4c4&formato=json"
            default:
                break;
        }
    }

    let response;
    const {
        error: indicatorListError,
        data: indicatorList,
        loading: indicatorListLoading,
    } = fetchApiEffect(validar(itemSelected?.name));

    if (indicatorList) {
        response = indicatorList[itemSelected?.id];
        // setData(indicatorList[itemSelected?.id])
    }

    return (
        <View>
            <FlatList
                data={response}
                keyExtractor={(item, key) => key}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>

                            <Text style={styles.title}>{index}</Text>
                        </View>
                    )
                }}
                ListEmptyComponent={<Text>VACIO...</Text>}
            />
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({})