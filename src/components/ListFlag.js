import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

const ListFlag = ({ data, opacity, scale }) => {
    console.log('log: ', data)
    const { title } = data;
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
                <Text style={{ fontSize: 17 }}>{title}</Text>
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
    )
}

export default ListFlag

const styles = StyleSheet.create({})