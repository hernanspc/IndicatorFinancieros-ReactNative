import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useState } from 'react';

export const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [initialPosition, setInitialPosition] = useState({
        longitude: 0,
        latitude: 0,
    })

    useEffect(() => {
        getCurrentLocation()
            .then(location => {
                setInitialPosition(location);
                setHasLocation(true)
            })

    }, [])


    const getCurrentLocation = () => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {

                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    })
                },
                (err) => reject({ err }), { enableHighAccuracy: true }
            )
        })
    }

    return {
        hasLocation,
        initialPosition,
        getCurrentLocation
    }
}