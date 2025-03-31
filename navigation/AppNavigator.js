import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationStack from './AuthenticationStack';
import MainTabs from './MainTabs';
import MatchDetailScreen from '../screens/MatchDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator({ user }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
                <>
                    <Stack.Screen name="MainTabs" component={MainTabs} />
                    <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
                </>
            ) : (
                <Stack.Screen name="Authentication" component={AuthenticationStack} />
            )}
        </Stack.Navigator>
    );
}
