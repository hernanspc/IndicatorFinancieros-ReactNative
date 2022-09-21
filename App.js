import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Navigator } from './src/navigator/Navigator'
import { PermissionsProvider } from './src/context/PermissionsContext'

const AppState = ({ children }) => {
  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})