import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { API_URL, API_TOKEN } from "@env"

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Button
        title='hello '
        onPress={
          () => {
            console.log('lgo', API_URL)
          }
        }
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})