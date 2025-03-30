import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
        initialRouteName='EntryScreen'
        screenOptions={{
            headerStyle: {
            backgroundColor: 'chocolate'
            },
            headerTintColor: 'white',
            headerTitleStyle: {
            fontWeight: '700'
            }
        }} >
    <Stack.Screen
        component={AuthenticationScreen}
        name='EntryScreen' />
    <Stack.Screen
        component={SignInScreen}
        name='SignInScreen' />
    <Stack.Screen
        component={SignUpScreen}
        name='SignUpScreen' />
    </Stack.Navigator>
  );
}
