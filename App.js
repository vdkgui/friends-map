import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import FriendsList from './src/screens/FriendsList'
import AddUser from './src/screens/addUserForm'
import EditForm from './src/screens/editForm'
import Maps from './src/screens/FriendsMap'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Setting a timer'])


//Configurando Encondig
import { decode, encode } from 'base-64'

if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
          headerStyle:{
            backgroundColor: "#3b5998",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }
      }>
        <Stack.Screen  name="Home" component={Home}  
        options={{title: "MAPA DE AMIGOS"}}/>
        <Stack.Screen  name="AddUser" component={AddUser}  
        options={{title: "ADICIONAR AMIGO"}}/>
        <Stack.Screen  name="FriendsList" component={FriendsList}  
        options={{title: "MAPA DE AMIGOS"}}/>
      <Stack.Screen  name="EditForm" component={EditForm}  
        options={{title: "EDITAR AMIGO"}}/>
      <Stack.Screen  name="Maps" component={Maps}  
        options={{title: "MAPA"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
