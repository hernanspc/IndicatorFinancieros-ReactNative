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
    const { itemSelected } = useSelector(state => state.flags);
    const { Valor } = itemSelected?.data;

    const { getGraphInfo, infoData } = useDataGraph();

    useEffect(() => {
        navigation.setOptions({
            title: title,
            // headerLargeTitle: true,
            headerBackTitle: "Indicadores"
        });
    }, [navigation]);

    useEffect(() => {
        getGraphInfo()
    }, [])

    return (
        <View>
            <Text heavy center giant color="#0247bb">{Valor}</Text>
            <Text center black color="#727479">Current Value</Text>

            <View style={{ marginTop: 32, marginBottom: 32, }}>
                <LineChart
                    data={{
                        labels: ["May", "June", "July", "August", "September", "October"],
                        datasets: [
                            {
                                data: [
                                    10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                    Math.random() * 10,
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={250}
                    yAxisLabel="$"
                    yAxisSuffix='k'
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
                />
            </View>
        </View>
    )
}

export default GraphScreen

const styles = StyleSheet.create({})