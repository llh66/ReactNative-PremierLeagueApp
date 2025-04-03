import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from './utils/StateContext';
import MainTabs from './navigation/MainTabs';

export default function App() {
    return (
        <ContextProvider>
            <NavigationContainer>
                <MainTabs/>
            </NavigationContainer>
        </ContextProvider>
    );
}
