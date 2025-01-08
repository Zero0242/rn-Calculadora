import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Slot />
      <StatusBar />
    </View>
  )
}