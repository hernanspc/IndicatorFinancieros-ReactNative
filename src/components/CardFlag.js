import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Animated from 'react-native-reanimated';

const SPACING = 10;
const AVATAR_SIZE = 50;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const CardFlag = ({ index, item, scrollY, opacity, scale }) => {
    console.log('xxxxxxx ', item)

    return (
        <Animated.View id={index} style={{
            flexDirection: 'row',
            padding: SPACING,
            marginBottom: SPACING,
            backgroundColor: "rgba(255,255,255,0.9)",
            borderRadius: 12,
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
            {/* <Image
                source={{ uri: 'https://picsum.photos/200' }}
                style={{
                    width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                }}
            /> */}
            <View >
                <Text style={{ fontSize: 19, fontWeight: "700" }} >
                    {item.title}
                </Text>
                <Text style={{ fontSize: 16, opacityy: .7 }} >
                    {"Trabajo"}
                </Text>
                <Text style={{ fontSize: 14, opacityy: .8, color: "#0099cc" }} >
                    {"Email"}
                </Text>
            </View>
        </Animated.View>
    )
}

export default CardFlag

const styles = StyleSheet.create({})