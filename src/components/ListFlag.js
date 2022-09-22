import React from 'react'
import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../constants/colors';
import { setItemSelected } from '../features/flags/flags';
import { useDispatch } from 'react-redux';

const ListFlag = ({ data, opacity, scale }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();
    const { title, description, id } = data;

    const handlePress = (data) => {
        navigation.navigate('Detail', { title: title })
        dispatch(setItemSelected(data));
    }

    return (
        <Animated.View style={[styles.container, { opacity, transform: [{ scale }] }]}>
            <View style={styles.wrapperText}  >
                <TouchableOpacity style={{ paddingBottom: 15, }} onPress={() => handlePress(data)}>
                    <Text style={{ fontSize: 17 }}>{title}</Text>
                </TouchableOpacity>
                <Text style={{ paddingBottom: 10, fontSize: 14, color: colors[colorScheme].tintIos }}>{description}</Text>
            </View>
            <View style={styles.wrapperIcon}>
                <Ionicons name="information-circle-outline" size={30} color="#0078fd" />
                <Entypo name="chevron-right" size={24} color="#cacacb" />
            </View>
        </Animated.View>
    )
}

export default ListFlag

const styles = StyleSheet.create({
    container: {
        marginVertical: 5, display: 'flex',
        flexDirection: 'row', width: "100%", height: 70,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#CBCBCB",
        shadowRadius: 10,
    },
    wrapperText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "70%",
        height: "100%",
    },
    wrapperIcon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: "30%",
        height: "100%",
    }
})