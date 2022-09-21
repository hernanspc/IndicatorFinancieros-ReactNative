import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { useGetFlags } from '../hooks/useGetFlags.js'
import Animated from 'react-native-reanimated';
import ListFlag from '../components/ListFlag'
import { SPACING, ITEM_SIZE } from '../utils/constants.js';

const Home = () => {

    const { simpleData } = useGetFlags();
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            {/* <Image
                source={{ uri: 'https://images.pexels.com/photos/13597045/pexels-photo-13597045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={StyleSheet.absoluteFill}
                blurRadius={4}
            /> */}
            <Animated.FlatList
                data={simpleData}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                renderItem={(({ index, item }) => {
                    const inputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 2),
                    ]

                    const opacityinputRange = [
                        -1,
                        0,
                        ITEM_SIZE * index,
                        ITEM_SIZE * (index + 1),
                    ]

                    const scale = scrollY.interpolate({
                        inputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    const opacity = scrollY.interpolate({
                        inputRange: opacityinputRange,
                        outputRange: [1, 1, 1, 0]
                    })

                    return (
                        <ListFlag key={index} data={item} opacity={opacity} scale={scale} />
                    )
                })}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 20
                }}
            />
        </View >
    )
}

export default Home

const styles = StyleSheet.create({})