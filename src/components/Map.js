import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../pages/LoadingScreen';
import { Fab } from './Fab';

const Map = () => {

    const { hasLocation, initialPosition, getCurrentLocation } = useLocation();

    const mapViewRef = useRef();
    const following = useRef(true);

    const centerPosition = async () => {

        const { latitude, longitude } = await getCurrentLocation();

        // following.current = true;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }

    if (!hasLocation) {
        return <LoadingScreen />
    }

    return (
        <>
            <MapView
                ref={(el) => mapViewRef.current = el}
                style={{ flex: 1 }}
                showsUserLocation
                region={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
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

            <Fab
                iconName={'compass-outline'}
                onPress={centerPosition}
                style={{ position: 'absolute', bottom: 20, right: 20 }}
            />
        </>
    )
}

export default Map