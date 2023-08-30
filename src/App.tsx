/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  LogBox,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CityFlatlist from './CityFlatList';
import CarDetails from './CarDetails';
import CarList from './CarList';
import {SafeAreaView} from 'react-native-safe-area-context';
import UseEffectcomponent from './useEffectcomponent';
import LoginScreen from './containers/LoginScreen/LoginScreen';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import UserProfile from './UserProfile';
import persistenthelper from './helper/persistenthelper';
import {EventRegister} from 'react-native-event-listeners';
import MyClasssComponent from './MyClassComponent';
import ListScreen from './containers/ListScreen';
import {Provider} from 'react-redux';
import store from './store';
import {increment, decrement} from './features/counter/counterslice';
import CartScreen from './containers/cardScreen';
import {useSelector, useDispatch} from 'react-redux';
import {AuthSlice} from './features/Auth/AuthSlice';
import analytics from '@react-native-firebase/analytics';
import MapScreen from './containers/MapScreen/Mapscreen';
import SignupScreen from './containers/signupScreen';
import {userActions} from './features/user/userSlice';
import FirestoreScreen from './containers/FirestoreScreen';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // const getUserName = async () => {
  //   const username = await persistenthelper.getValue('username');
  //   // console.log(username, 'username');
  //   setIsUserLoggedIn(username ? true : false);
  // };

  const Nav = () => {
    const userData = useSelector(state => state.user);
    const isUserLoggedIn =
      typeof userData?.data?.id === 'string' ? true : false;

    // const isUserLoggedIn = useSelector(state => state.Auth.isloggedin);

    console.log(isUserLoggedIn, 'isUserloggedin');

    const getAuthStack = () => {
      return (
        <Stack.Group>
          <Stack.Screen
            name="signUp"
            component={SignupScreen}
            options={{title: 'Signup'}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
        </Stack.Group>
      );
    };

    const getMainStack = () => {
      return (
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: '#cd6850',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="FirestoreScreen"
            component={FirestoreScreen}
            options={{title: 'firestore'}}
          />

          <Stack.Screen
            name="List"
            component={ListScreen}
            options={{title: 'List'}}
          />

          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{title: 'Overview'}}
          />
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{title: 'Cart'}}
          />

          <Stack.Screen
            name="Maps"
            component={MapScreen}
            options={{title: 'Maps'}}
          />
        </Stack.Group>
      );
    };

    return (
      <Stack.Navigator>
        {isUserLoggedIn ? getMainStack() : getAuthStack()}
      </Stack.Navigator>
    );
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 35,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  listtext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#000000c0',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
