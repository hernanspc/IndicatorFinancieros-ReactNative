import { StyleSheet, Text as TextDefault, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import Text from '../components/Text';
import { useSelector } from 'react-redux';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { useDataGraph } from '../hooks/useDataGraph';
import { selectedMoths } from '../utils/functions';
import { Input, VStack, HStack, Center, NativeBaseProvider } from "native-base";
import GraphSkeleton from './GraphSkeleton';

const GraphScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { params } = route;
    const { title } = params;
    const { itemSelected, infoGraph } = useSelector(state => state.flags);
    const { labels, amount } = infoGraph
    const { Valor } = itemSelected?.data;
    // console.log('itemSelected ', itemSelected)
    const abc = useDataGraph();

    const obj = [
        {
            id: "1",
            title: "Nombre",
            amount: `${10}`,
        }, {
            id: "2",
            title: "Fecha",
            amount: `${20}`,
        }, {
            id: "3",
            title: "Unidad de Medida",
            amount: `${30}`,
        }
    ]

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    if (infoGraph.length === 0) return <GraphSkeleton />

    return (
        <View>
            <Text heavy center giant color="#0247bb">$ {Valor}</Text>
            <Text center black color="#727479">Current Value</Text>

            <>
                {obj.map((item, index) =>
                    <View key={index} style={styles.container}>
                        <View style={styles.title}>
                            <Text large black style={{ color: "#000" }}>{item.title}</Text>
                        </View>
                        <View style={styles.element}>
                            <Input isDisabled mx="3" placeholder="Input" value={item.amount} />
                        </View>
                    </View>
                )}
            </>
            {/* <View style={styles.container}>
                <View style={styles.title}>
                    <Text large black style={{ color: "#000" }}>Nombre</Text>
                </View>
                <View style={styles.element}>
                    <Input isDisabled mx="3" placeholder="Input" value='Euro' />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text large black style={{ color: "#000" }}>Fecha</Text>
                </View>
                <View style={styles.element}>
                    <Input isDisabled mx="3" placeholder="Input" value='Euro' />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text large black style={{ color: "#000" }}>Unidad de Medida</Text>
                </View>
                <View style={styles.element}>
                    <Input isDisabled mx="3" placeholder="Input" value='Euro' />
                </View>
            </View> */}

            <View style={{ marginTop: 32, marginBottom: 32, }}>
                <LineChart
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                data: amount,
                                // data: [885.15, 898.69, 910.27, 917.11, 922.6, 928.25, 938.82],
                                // data: ["34013.91", "34108.71", "34122.28", "34135.85", "34149.42"]
                                color: (opacity = 1) => `rgba(0, 0, 244, ${opacity})`, // optional
                                strokeWidth: 4 // optional
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={320}
                    verticalLabelRotation={70}
                    withInnerLines={true}
                    decimalPlaces={0}
                    // yAxisLabel="$"
                    // yAxisSuffix='k'
                    chartConfig={{
                        backgroundGradientFrom: 0,
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: 0,
                        backgroundGradientToOpacity: 0,
                        color: (opacity = 1) => `rgba(20,2, 210, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 10, 0, ${opacity})`,
                        backgroundColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                        strokeWidth: 2, // optional, default 3                       
                    }}
                    // withVerticalLines={true}
                    // withHorizontalLines={true}
                    bezier
                />

            </View>
        </View >
    )
}

export default GraphScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 30,
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: "50%",
    },
    element: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: "50%",
    }
})