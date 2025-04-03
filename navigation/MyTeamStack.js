import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchDetailScreen from '../screens/MatchDetailScreen';
import FavoriteTeamScreen from '../screens/FavoriteTeamScreen';

const Stack = createNativeStackNavigator();

const MyTeamStack = () => {

    return (
        <Stack.Navigator initialRouteName='My Team'>
            <Stack.Group  screenOptions={{headerShown: false}}>
                <Stack.Screen name="My Team" component={FavoriteTeamScreen} />
                <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default MyTeamStack;