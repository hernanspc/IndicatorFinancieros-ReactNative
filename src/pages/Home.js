import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { useGetFlags } from '../hooks/useGetFlags.js'
import { FlatList } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const Home = () => {

    const { simpleData } = useGetFlags();
    console.log('simpleData', simpleData[0])
    const scrollY = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={{ flex: 1, backgroundColor: "#FFF" }}>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/13597045/pexels-photo-13597045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
                style={StyleSheet.absoluteFill}
                blurRadius={4}
            />
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
                        <Animated.View id={index} style={{
                            flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 12,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: .3,
                            shadowRadius: 20,
                            opacity,
                            transform: [{ scale }]
                        }}>
                            <Image
                                source={{ uri: 'https://picsum.photos/200' }}
                                style={{
                                    width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING / 2,
                                }}
                            />
                            <View >
                                <Text style={{ fontSize: 22, fontWeight: "700" }} >
                                    {"Nombre"}
                                </Text>
                                <Text style={{ fontSize: 18, opacityy: .7 }} >
                                    {"Trabajo"}
                                </Text>
                                <Text style={{ fontSize: 14, opacityy: .8, color: "#0099cc" }} >
                                    {"Email"}
                                </Text>
                            </View>
                        </Animated.View>
                    )
                })}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})