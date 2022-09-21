import { SafeAreaView, StyleSheet, Text as TextDefault, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Button } from '@react-native-material/core'
import Text from '../components/Text';
import { signIn } from '../features/auth/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AuthScreen = () => {
    const navigation = useNavigation();

    async function check() {
        const firstLaunch = await AsyncStorage.getItem("@firstOnboard");
        if (firstLaunch === null) navigation.navigate("OnboardingCarousel");
    }

    React.useEffect(() => {
        check();
    }, []);

    const dispatch = useDispatch();

    const handlePress = () => {
        const user = "juan perez"
        dispatch(signIn(user));
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#1e1e1e' }}>
            <Text center heavy title color="#964ff0" margin="32px 0 0 0" >
                Indicadores Financieros
            </Text>

            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={[styles.viewCircle, { backgroundColor: "#1e1e1e" }]}>
                    <View style={[styles.viewCircle, { backgroundColor: "#5196f405" }]}>
                        <View style={[styles.viewCircle, { backgroundColor: "#5196f410" }]}>
                            <View style={[styles.viewCircle, { backgroundColor: "#5196f430" }]}>
                                <TouchableOpacity style={[styles.viewCircle, { backgroundColor: "#5196f4" }]} onPress={handlePress}>
                                    <MaterialIcons name="fingerprint" size={64} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <Text center heavy large >
                Sensor Touch ID para acceder a {"\n"} su indicadores FInancieros
            </Text>

            <Text center bold margin="16px 0 0 0" color="#9c9c9f" >
                Verifique su identidad{"\n"} usando Touch ID
            </Text>

        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    viewCircle: {
        padding: 32,
        borderRadius: 999
    }
})