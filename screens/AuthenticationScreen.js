import React from 'react';
import { StyleSheet, TouchableOpacity ,Text, View } from 'react-native';

const AuthenticationScreen = ({navigation}) => {
  return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("SignUpScreen")}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 10,
        height: 40,
        backgroundColor: 'chocolate',
    },
    buttonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '700'
    }
});

export default AuthenticationScreen;
