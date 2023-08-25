import React, {useState, useEffect, useRef} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import styles from './styles';
import persistenthelper from '../../helper/persistenthelper';
import {useSelector, useDispatch} from 'react-redux';
import {toggleStack} from '../../features/Auth/AuthSlice';
import auth from '@react-native-firebase/auth';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Tracking previos state value using useRef
  const prevTextValue = useRef('');

  const dispatch = useDispatch();

  // Focus the username using ref
  const focusUser = useRef();
  const focusPassword = useRef();

  useEffect(() => {
    if (username != prevTextValue.current) {
      console.log('value changed', username);
      prevTextValue.current = username;
    }
  }, [username]);

  return (
    <View>
      {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Current value: {username}
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Previous Value: {prevTextValue.current}
      </Text> */}
      <TextInput
        ref={focusUser}
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Enter Username"
        style={styles.textinput}
      />
      <TextInput
        ref={focusPassword}
        value={password}
        onChangeText={changedText => {
          setPassword(changedText);
        }}
        placeholder="Enter Password"
        style={styles.textinput}
      />

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          dispatch(toggleStack());
          auth()
            .createUserWithEmailAndPassword(username, password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submit} onPress={() => {}}>
        <Text style={styles.buttontext}>facebook login</Text>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            focusUser.current.focus();
          }}>
          <Text style={styles.buttontext}>Focus Username</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            focusPassword.current.focus();
          }}>
          <Text style={styles.buttontext}>Focus Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
