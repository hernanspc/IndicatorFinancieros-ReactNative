import * as React from 'react';
import { Button, StatusBar, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../pages/MapScreen';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {
    return (<>
        <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                options={{
                    title: 'Inicio',
                    headerTitle: "Indicadores",

                }}
                name="Home" component={Home} />
            <Drawer.Screen
                options={{
                    title: 'Mapa',
                    headerTitle: "Mi Ubicacion",
                }}
                name="Mapa" component={MapScreen} />
        </Drawer.Navigator>
    </>


    );
}