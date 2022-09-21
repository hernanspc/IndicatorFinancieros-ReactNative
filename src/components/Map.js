import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../pages/LoadingScreen';

const Map = () => {

    const { hasLocation, initialPosition } = useLocation();

    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitud,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78820,
                        longitude: -122.4324,
                    }}
                    title='Esto es titulo'
                    description='Esto es description'
                />
            </MapView>
        </>
    )
}

export default Map