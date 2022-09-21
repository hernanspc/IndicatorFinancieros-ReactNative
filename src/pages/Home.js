import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'
import React from 'react'
import { useGetFlags } from '../hooks/useGetFlags.js'
import Animated from 'react-native-reanimated';
import { ListItem } from "@react-native-material/core";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Cardluis from '../components/Carluis'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SPACING = 10;
const AVATAR_SIZE = 30;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

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
                // ItemSeparatorComponent={() => {
                //     return (<View style={{ height: 1, backgroundColor: '#CBCBCB' }} />);
                // }}
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
                        <Animated.View style={{
                            marginVertical: 5, display: 'flex',
                            flexDirection: 'row', width: "100%", height: 70,
                            paddingHorizontal: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: "#CBCBCB",
                            shadowRadius: 10,
                            opacity,
                            transform: [{ scale }]
                        }}>
                            <View style={{
                                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                                // alignItems: 'center',
                                width: "70%", height: "100%",
                            }}>
                                <Text style={{ fontSize: 17 }}>{index}</Text>
                                <Text style={{ paddingBottom: 10, fontSize: 14, color: "#0078fd" }}>description</Text>
                            </View>
                            <View style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: "30%",
                                height: "100%",
                            }}>
                                {/* <FontAwesome5 name="info-circle" size={24} color="black" /> */}
                                <Ionicons name="information-circle-outline" size={30} color="#0078fd" />
                                {/* <MaterialIcons name="keyboard-arrow-right" size={24} color="black" /> */}
                                <Entypo name="chevron-right" size={24} color="#cacacb" />
                            </View>
                        </Animated.View>

                        // <Animated.View id={index} style={{
                        //     flexDirection: 'row',
                        //     padding: SPACING, marginBottom: SPACING, backgroundColor: "rgba(255,255,255,0.9)", borderRadius: 12,
                        //     shadowColor: "#000",
                        //     shadowOffset: {
                        //         width: 0,
                        //         height: 10,
                        //     },
                        //     shadowOpacity: .1,
                        //     shadowRadius: 10,
                        //     elevation: 2,
                        //     opacity,
                        //     transform: [{ scale }]
                        // }}>
                        // </Animated.View>
                    )
                })}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    padding: SPACING,
                    paddingTop: StatusBar.currentHeight || 42
                }}
            />
        </View >
    )
}

export default Home

const styles = StyleSheet.create({})