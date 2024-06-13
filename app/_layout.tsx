import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack screenOptions={{ headerStyle: {backgroundColor:'#f4511e'}, headerTintColor:'#fff'}}>
        <Stack.Screen name="index" options={{ title: "PokeDex" }} />
        <Stack.Screen name="(pokemon)/[id]" options={{ title: "" }} />
    </Stack>
  )
}

export default Layout