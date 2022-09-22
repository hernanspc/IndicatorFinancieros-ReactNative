import { StyleSheet, Text as TextDefault, View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
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

const GraphScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const { params } = route;
    const { title } = params;
    const { itemSelected, infoGraph } = useSelector(state => state.flags);
    const { Valor } = itemSelected?.data;

    const { dataGraph } = useDataGraph();
    const { amount } = dataGraph

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);
    console.log('infoGraph ', infoGraph.amount)

    return (
        <View>
            <Text heavy center giant color="#0247bb">{Valor}</Text>
            <Text center black color="#727479">Current Value</Text>

            <View style={{ marginTop: 32, marginBottom: 32, }}>
                {dataGraph ?
                    <LineChart
                        data={{
                            labels: dataGraph?.labels,
                            datasets: [
                                {
                                    data: infoGraph.amount
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width}
                        height={250}
                        decimalPlaces={0}
                        yAxisLabel="$"
                        // yAxisSuffix='k'
                        chartConfig={{
                            backgroundGradientFrom: "#1e1e1e",
                            backgroundGradientTo: "#1e1e1e",
                            // backgroundGradientFrom: "#B5B5B5",
                            // backgroundGradientTo: "#B5B5B5",
                            color: (opacity = 1) => `rgba(81,150,244, ${opacity})`,
                            labelColor: () => `rgba(255,255,255, 0.2)`,
                            // labelColor: () => `#1e1e1e`,
                            strokeWidth: 3,
                        }}
                        // withVerticalLines={false}
                        // withHorizontalLines={false}
                        bezier
                    /> : null
                }
            </View>
        </View>
    )
}

export default GraphScreen

const styles = StyleSheet.create({})