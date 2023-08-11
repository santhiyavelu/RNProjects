import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import styles from './styles';
import persistenthelper from '../../helper/persistenthelper';

const LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {route} = props;

  useEffect(() => {
    persistenthelper.setObject('mytestobject', {
      firstName: 'Santhiya',
      lastName: 'jai',
    });
  }, []);

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={changedText => {
          setUsername(changedText);
        }}
        placeholder="Enter Username"
        style={styles.textinput}
      />
      <TextInput
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
          persistenthelper.setData('username', username);
          EventRegister.emit('userLoggedIn', {username});
        }}>
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
