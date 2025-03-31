import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for icons
import globalStyles from "../components/globalStyles";
import { colors } from "../components/globalStyles";
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
        paddingHorizontal: 20, // Added horizontal padding for better spacing
    },
    header: {
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        marginBottom: 30,
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
