import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchDetailScreen from '../screens/MatchDetailScreen';
import UpcomingMatchesScreen from '../screens/UpcomingMatchesScreen';

const Stack = createNativeStackNavigator();

const MatchStack = () => {

    return (
        <Stack.Navigator initialRouteName='UpcomingMatches'>
            <Stack.Group screenOptions={{headerShown: false}}>
                <Stack.Screen name="UpcomingMatches" component={UpcomingMatchesScreen} />
                <Stack.Screen name="MatchDetail" component={MatchDetailScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
}
export default MatchStack;