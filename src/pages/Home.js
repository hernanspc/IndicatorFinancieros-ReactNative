import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetFlags } from '../hooks/useGetFlags.js'
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {

    const { simpleData } = useGetFlags();
    console.log('simpleData', simpleData[0])
    return (
        <View>
            <FlatList
                data={simpleData}
                renderItem={(data => (
                    <View id={data.index}>
                        <Text>
                            {data.index}
                        </Text>
                    </View>
                ))}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})