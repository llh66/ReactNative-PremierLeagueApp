import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import { StyleSheet } from 'react-native';

const AuthenticationScreen = ({ navigation }) => {
    return (
        <View style={[globalStyles.container, styles.screenPadding]}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Welcome to Premier League App</Text>
                <Text style={styles.subtitle}>Sign in or create an account to get started.</Text>
            </View>

            {/* Buttons */}
            <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
                style={[styles.button, styles.signInButton]}
            >
                <Icon name="sign-in" size={16} color={colors.white} />
                <Text style={styles.buttonText}> Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
                style={[styles.button, styles.signUpButton]}
            >
                <Icon name="user-plus" size={16} color={colors.primary} />
                <Text style={[styles.buttonText, styles.signUpButtonText]}> Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screenPadding: {
        flex: 1,  // Takes full screen height
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginBottom: 100,
        width: '100%',  // Ensure full width
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: colors.white,
        textAlign: 'center',
        marginTop: 8,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 20,
        width: '90%',  // Adjust button width for better UI
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    signUpButton: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
    },
    signUpButtonText: {
        color: colors.primary,
    },
});

export default AuthenticationScreen;
