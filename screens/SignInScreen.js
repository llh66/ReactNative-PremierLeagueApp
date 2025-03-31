import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../config/FirebaseConfig';
import globalStyles from "../components/globalStyles";
import { colors } from "../components/globalStyles";

export default SignInScreen = () => {

    const [userObject, setUserObject] = useState({
        email: '',
        password: '',
        error: ''
    });

  async function SignIn() {
    if(userObject.email === "" || userObject.password === "") {
        setUserObject({
            ...userObject,
            error: 'Email and Password are mandatory!'
        });
        return;
    }

    try {
        await signInWithEmailAndPassword(FIREBASE_AUTH ,userObject.email, userObject.password)
        .then((result) => {
            console.log(result.user.email);
        })
    } catch(err) {
        setUserObject({
            ...userObject,
            error: "Something went wrong"
        });
    }
  }

  return (
    <View style={[globalStyles.container, styles.container]}>
        <Text style={styles.heading}>Sign In</Text>

        <TextInput
            style={styles.inputText}
            placeholder='Enter Email'
            keyboardType='email-address'
            autoCapitalize='none'
            autoCorrect={false}
            value={userObject.email}
            onChangeText={(text) => setUserObject({...userObject, email: text})}
        />

        <TextInput
            style={styles.inputText}
            placeholder='Enter Password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={userObject.password}
            onChangeText={(text) => setUserObject({...userObject, password: text})}
        />

        {userObject.error ? (
            <Text style={styles.errorText}>{userObject.error}</Text>
        ) : null}

        <TouchableOpacity style={globalStyles.button} onPress={SignIn}>
            <Text style={globalStyles.buttonText}>Sign In</Text>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  inputText: {
    width: '100%',
    height: 50,
    borderColor: colors.border,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  errorText: {
    color: colors.accent,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});
