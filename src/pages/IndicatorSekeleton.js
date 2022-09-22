import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton, VStack, HStack, Center, NativeBaseProvider } from "native-base";

const IndicatorSekeleton = () => {
    return (
        <Center w="100%">
            <HStack w="90%" maxW="400" space={10} rounded="md" _dark={{
                borderColor: "coolGray.500"
            }} _light={{
                borderColor: "coolGray.200"
            }} p="4">
                <VStack flex="3" space="4">
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                    <Skeleton.Text />
                    <Skeleton.Text />
                    <HStack space="2" alignItems="center">
                        <Skeleton size="5" rounded="full" />
                        <Skeleton h="3" flex="2" rounded="full" />
                        <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
                    </HStack>
                    <Skeleton.Text />
                </VStack>
            </HStack>
        </Center>
    )
}

export default IndicatorSekeleton

const styles = StyleSheet.create({})