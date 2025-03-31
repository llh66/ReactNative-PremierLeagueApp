import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PLDataProvider } from './utils/PLDataContext';
import AppNavigator from './navigation/AppNavigator';
import { UserAuthentication } from './config/UserAuthentication';

export default function App() {
    const { user } = UserAuthentication(); // Use only `user`

    return (
        <PLDataProvider>
            <NavigationContainer>
                <AppNavigator user={user} />
            </NavigationContainer>
        </PLDataProvider>
    );
}
