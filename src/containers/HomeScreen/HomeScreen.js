import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {EventRegister} from 'react-native-event-listeners';
import persistenthelper from '../../helper/persistenthelper';
import {useSelector, useDispatch} from 'react-redux';
import {
  increment,
  decrement,
  decrementByAmount,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {toggleStack} from '../../features/Auth/AuthSlice';
import {userActions} from '../../features/user/userSlice';

const image = {
  uri: '/Users/santhiyavelusamy/Documents/AwesomeProject1/src/assets/car1.jpg',
};

const Homescreen = ({navigation}) => {
  const [loggedUser, setLoggedUser] = useState('');
  const {onLogout} = userActions;

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    EventRegister.addEventListener('userLoggedIn', data => {
      console.log(data.username, 'username');
      setLoggedUser(data.username);
    });

    // return () => {
    //   EventRegister.removeEventListener(event);
    // };
  }, []);

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <Text style={styles.text}>Welcome ! {loggedUser}</Text>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
        {/* <Text style={styles.listtext}>CAR LIST</Text> */}
      </TouchableOpacity>
      {/* </ImageBackground> */}

      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => {
          navigation.navigate('Maps');
        }}>
        <Text>GotoMaps</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonText}
        onPress={() => {
          navigation.navigate('FirestoreScreen');
        }}>
        <Text>Go to FirestoreScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // dispatch(toggleStack());
          dispatch(onLogout());
          // persistenthelper.deleteValue('username', null);
          // EventRegister.emit('userLoggedIn', {username: undefined});
        }}
        style={styles.buttonText}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listtext: {
    color: 'white',
    fontSize: 20,
    height: 40,
    margin: 12,
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#000000c0',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonText: {
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homescreen;
