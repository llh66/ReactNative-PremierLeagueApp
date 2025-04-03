import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { colors } from "../styles/globalStyles";
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/FirebaseConfig'; // Import your Firebase config
import { Alert, TouchableOpacity } from 'react-native';
import { RootMyTeamTab, RootProfileTab } from '.';
import MatchStack from './MatchStack';
import { StateContext } from '../utils/StateContext';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    const {user} = useContext(StateContext);
    // Logout function
    const handleLogout = () => {
        Alert.alert(
            "Confirm logout",
            "Are you sure to logout?",
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: async () => {
                        try {
                            await signOut(FIREBASE_AUTH);  // Log the user out of Firebase
                        } catch (error) {
                            console.error("Error logging out:", error);
                        }
                    },
                    style: 'destructive',
                }
            ]
        )
    };

    const generalScreenOptions = {
        headerShown: true, // Ensure the header is shown
        headerStyle: {
            backgroundColor: colors.primary, // Custom header background
        },
        headerTitleStyle: {
            color: 'white',  // Change header text color to white
            fontWeight: 'bold', // Optional: Make the title bold
        },
        headerRight: () => (
            <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }} disabled={user === null}>
                {/* Use a bright color for logout icon */}
                {user && <Icon name="sign-out" size={25} color='white' />}
            </TouchableOpacity>
        ),
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.secondary,  // Active tab color (Premier League green)
                inactiveTintColor: colors.text,     // Inactive tab color (Dark text)
                style: {
                    backgroundColor: colors.primary, // Background color for the tab bar (Premier League purple)
                },
            }}
        >
            <Tab.Screen 
                name="Upcoming Matches"
                component={MatchStack}
                options={{
                    ...generalScreenOptions,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" color={color} size={size} /> // Calendar icon for upcoming matches
                    ),
                }}
            />
            <Tab.Screen
                name="My Team"
                component={RootMyTeamTab}
                options={{
                    ...generalScreenOptions,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="star" color={color} size={size} /> // Star icon for watchlist
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={RootProfileTab}
                options={{
                    ...generalScreenOptions,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} /> // Star icon for watchlist
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default MainTabs;