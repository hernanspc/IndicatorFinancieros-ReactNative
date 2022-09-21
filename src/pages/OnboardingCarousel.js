import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const onboardingSlide_1 = require('../assets/lotties/onboard/115410-bussines.json');
const onboardingSlide_2 = require('../assets/lotties/onboard/115088-pessoas-rm-farma.json');
const onboardingSlide_3 = require('../assets/lotties/onboard/washer-waiting.json');

const data = [
    {
        image: onboardingSlide_1,
        text: `Ahorre tiempo haciendo\nseguimiento`,
    },
    {
        image: onboardingSlide_2,
        text: `Manténgase al tanto\nde su negocio`,
    },
    {
        image: onboardingSlide_3,
        text: `Pasa más tiempo haciendo\n las cosas que te gustan`,
    },
];

const OnboardingCarousel = () => {
    const navigation = useNavigation();
    const [selectedPage, setSelectedPage] = useState(0);

    const handleNav = async () => {
        await AsyncStorage.setItem("@firstOnboard", "true");
        navigation.navigate("Auth");
    }


    return (
        <View>
            <Text>OnboardingCarousel</Text>
        </View>
    )
}

export default OnboardingCarousel

const styles = StyleSheet.create({})