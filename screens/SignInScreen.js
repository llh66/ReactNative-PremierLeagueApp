import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../config/FirebaseConfig';
import globalStyles from "../styles/globalStyles";
import { colors } from "../styles/globalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

export default SignInScreen = ({navigation}) => {
    const [userObject, setUserObject] = useState({
        email: '',
        password: '',
        error: ''
    });

    async function SignIn() {
        if (userObject.email === "" || userObject.password === "") {
            setUserObject({
                ...userObject,
                error: 'Email and Password are mandatory!'
            });
            return;
        }

        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, userObject.email, userObject.password)
                .then((result) => {
                    console.log(result.user.email);
                });
        } catch (err) {
            setUserObject({
                ...userObject,
                error: "Something went wrong"
            });
        }
    }

    return (
        <View style={[globalStyles.container, styles.container]}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon style= {styles.icon} name="arrow-left" size={20} color={colors.primary} />
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.heading}>Welcome Back!</Text>
                <Text style={styles.subtitle}>Sign in to continue</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={18} color={colors.primary} style={styles.inputIcon} />
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={userObject.email}
                    onChangeText={(text) => setUserObject({ ...userObject, email: text })}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color={colors.primary} style={styles.inputIcon} />
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={userObject.password}
                    onChangeText={(text) => setUserObject({ ...userObject, password: text })}
                />
            </View>

            {userObject.error ? (
                <Text style={styles.errorText}>{userObject.error}</Text>
            ) : null}

            {/* Sign In Button */}
            <TouchableOpacity style={styles.button} onPress={SignIn}>
                <Icon name="sign-in" size={18} color={colors.white} />
                <Text style={styles.buttonText}> Sign In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        position: 'absolute',
        top: 0,
        left: 0
    },
    backButtonText: {
        fontSize: 20,  // Increased font size
        fontWeight: "bold",
        color: colors.primary,
        marginLeft: 8,
        marginTop: 10,
    },
    icon: {
        marginTop: 10,
    },
    header: {
        marginBottom: 40,
        alignItems: 'center',
    },
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.textSecondary,
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.white,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    inputIcon: {
        marginRight: 10,
    },
    inputText: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    errorText: {
        color: colors.accent,
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        paddingVertical: 14,
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
