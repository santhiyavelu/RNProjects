import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, Platform} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {toggleStack} from '../../features/Auth/AuthSlice';
import {useEffect} from 'react';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {kApiSignup} from '../../config/webservices';
import {userActions} from '../../features/user/userSlice';
import {NativeModules, Button} from 'react-native';

const {request} = userActions;
const {CalendarModule} = NativeModules;

const SignupScreen = ({navigation}, props) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSignup = async () => {
      try {
        if (email && password) {
          await auth().createUserWithEmailAndPassword(email, password);
          console.log('User account created & signed in!');
        } else {
          console.log('Please enter both email and password.');
        }
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } else {
          console.error(error);
        }
      }
    };
    handleSignup();
  }, [email]);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    const onPress = () => {
      CalendarModule.createCalendarEvent('testName', 'testLocation');
    };

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={changedText => {
          setUserName(changedText);
        }}
        placeholder="Enter UserName"
        style={styles.textinput}
      />

      <TextInput
        value={email}
        onChangeText={changedText => {
          setEmail(changedText);
        }}
        placeholder="Enter Email"
        style={styles.textinput}
      />
      <TextInput
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Enter Password"
        secureTextEntry={true}
        style={styles.textinput}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.submit, styles.signupButton]}
          onPress={() => {
            // handleSignup();
            dispatch(
              request({url: kApiSignup, data: {username, email, password}}),
            );
            dispatch(toggleStack());
          }}>
          <Text style={styles.buttontext}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.submit, styles.loginButton]}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.fbButton}
        onPress={() => {
          console.log('pressed');
          onFacebookButtonPress().then(() =>
            console.log('Signed in with Facebook!'),
          );
        }}>
        <Text style={styles.buttontext}>Sign in with facebook</Text>
      </TouchableOpacity>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={() => {
          CalendarModule.createCalendarEvent(
            'Native Module',
            'Integration with react native',
          );
        }}
      />
    </View>
  );
};

export default SignupScreen;
