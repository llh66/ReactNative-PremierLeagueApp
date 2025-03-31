import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import { colors } from '../components/globalStyles';

const Stack = createNativeStackNavigator();

export default function AuthenticationStack() {
  return (
    <Stack.Navigator
    initialRouteName="EntryScreen"
    screenOptions={{
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: '700',
            fontSize: 22,
        },
    }}
>
    <Stack.Screen
        name="EntryScreen"
        component={AuthenticationScreen}
        options={{ title: 'Welcome' }} // Ensure title is a string
    />
    <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: 'Sign In' }}
    />
    <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: 'Sign Up' }}
    />
</Stack.Navigator>

  );
}
