import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FIREBASE_AUTH } from '../config/FirebaseConfig';

export default SignUpScreen = () => {

  const [userObject, setUserObject] = useState({
    email: '',
    password: '',
    error: ''
  });

  async function SignUp() {
    if(userObject.email === "" || userObject.password === "") {
      setUserObject({
        ...userObject,
        error: 'Email and Password is mandatory!'
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(FIREBASE_AUTH ,userObject.email, userObject.password)
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
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder='Enter Username'
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

      {
        !!userObject.error &&
        <View style={{ marginBottom: 10 }}>
          <Text style={{ color: 'red', fontSize: 18 }}>{userObject.error}</Text>
        </View>
      }

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={SignUp} >
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
    justifyContent: 'center'
  },
  inputText: {
    width: '80%',
    height: 50,
    borderColor: 'chocolate',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    marginBottom: 20
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
