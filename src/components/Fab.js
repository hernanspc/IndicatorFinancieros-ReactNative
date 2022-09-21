import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Fab = ({ iconName, onPress, style = {} }) => {
    return (
        <View style={{ ...style }}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Icon
                    name={iconName}
                    color="white"
                    size={35}
                    style={{ left: 1 }}
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 9999,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
});
