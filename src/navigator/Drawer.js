import * as React from 'react';
import { Button, StatusBar, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MapScreen from '../pages/MapScreen';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const Drawer = createDrawerNavigator();
export default function MyDrawer() {

    return (
        <>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen
                    options={{
                        title: 'Inicio',
                        headerTitle: "Indicadores",
                        headerStyle: {
                            // backgroundColor: '#202023', 
                            // backgroundColor: '#f0e7db',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                    name="Home" component={Home} />
                <Drawer.Screen
                    options={{
                        title: 'Detalle',
                        headerTitle: "Detalle de lo que presionaste",
                        headerStyle: {
                            // backgroundColor: '#202023', 
                            // backgroundColor: '#f0e7db',
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                    name="Detail" component={Detail} />
                <Drawer.Screen
                    options={{
                        title: 'Mapa',
                        headerTitle: "Mi Ubicacion",
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                    name="Mapa" component={MapScreen} />
            </Drawer.Navigator>
        </>


    );
}