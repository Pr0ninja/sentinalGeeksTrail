import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screen/Login';
import Home from '../Screen/Home'

const Stack = createStackNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Home" component={Home} options={{title:"Grid",headerStyle:{
                    backgroundColor:"rgb(56,72,134)"
                },headerTintColor:"white"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
