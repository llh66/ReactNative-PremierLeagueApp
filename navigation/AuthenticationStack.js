import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import { colors } from "../styles/globalStyles";

const Stack = createNativeStackNavigator();

const AuthenticationStack = () => {
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
            headerShown: false
        }}
        >
            <Stack.Screen
                name="EntryScreen"
                component={AuthenticationScreen}
                options={{ title: 'Welcome Page' }} 
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

export default AuthenticationStack;