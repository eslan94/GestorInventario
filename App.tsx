import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import { LoginScreen } from './src/screens/LoginScreen'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { MenuScreen } from './src/screens/MenuScreen'
import { RegisterScreen } from './src/screens/RegisterScreen'

export const App = () => {

  const Stack = createStackNavigator();

  function MyStack() {
    <Stack.Navigator>
      <Stack.Screen name="MenuScreen" component={LoginScreen}/>
    </Stack.Navigator>
  }

  return (
    <SafeAreaView style={{flex:1}}>
      {/*<LoginScreen/>*/}
      {/*<MenuScreen/>*/}
      <RegisterScreen/>
    </SafeAreaView>
  )
}

