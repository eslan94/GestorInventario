import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'

export const App = () => {

  const Stack = createStackNavigator();

  function MyStack() {
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={LoginScreen}/>
    </Stack.Navigator>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <LoginScreen/>
    </SafeAreaView>
  )
}

