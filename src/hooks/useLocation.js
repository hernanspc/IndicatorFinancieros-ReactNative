import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';

export const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState('')

    useEffect(() => {
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                setInitialPosition({
                    latitude: coords.latitude,
                    longitud: coords.longitude,
                })
                setHasLocation(true)
            },
            (err) => console.log({ err }), { enableHighAccuracy: true }
        )
    }, [])




    return {
        hasLocation,
        initialPosition
    }
}