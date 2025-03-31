import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpcomingMatchesScreen from '../screens/UpcomingMatchesScreen';
import WatchlistScreen from '../screens/WatchlistScreen';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { colors } from "../components/globalStyles"; // Assuming your colors are imported from here
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../config/FirebaseConfig'; // Import your Firebase config
import { TouchableOpacity } from 'react-native';

const Tab = createBottomTabNavigator();

export default function MainTabs({ navigation }) {
    // Logout function
    const handleLogout = async () => {
        try {
            await signOut(FIREBASE_AUTH);  // Log the user out of Firebase
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

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
                component={UpcomingMatchesScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="calendar" color={color} size={size} /> // Calendar icon for upcoming matches
                    ),
                    headerShown: true, // Ensure the header is shown
                    headerStyle: {
                        backgroundColor: colors.primary, // Custom header background
                    },
                    headerTitleStyle: {
                        color: 'white',  // Change header text color to white
                        fontWeight: 'bold', // Optional: Make the title bold
                    },
                    headerRight: () => (
                        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                            {/* Use a bright color for logout icon */}
                            <Icon name="sign-out" size={25} color='white' /> 
                        </TouchableOpacity>
                    ),
                }}
            />
            <Tab.Screen
                name="Watchlist"
                component={WatchlistScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="star" color={color} size={size} /> // Star icon for watchlist
                    ),
                    headerShown: true, // Ensure the header is shown
                    headerStyle: {
                        backgroundColor: colors.primary, // Custom header background
                    },
                    headerTitleStyle: {
                        color: 'white',  // Change header text color to white
                        fontWeight: 'bold', // Optional: Make the title bold
                    },
                    headerRight: () => (
                        <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
                            {/* Use a bright color for logout icon */}
                            <Icon name="sign-out" size={25} color='white' /> 
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
