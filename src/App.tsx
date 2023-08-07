/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  LogBox,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CityFlatlist from './CityFlatList';
import CarDetails from './CarDetails';
import CarList from './CarList';
import {SafeAreaView} from 'react-native-safe-area-context';

const image = {
  uri: '/Users/santhiyavelusamy/Documents/AwesomeProject1/src/assets/car1.jpg',
};

const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome! CAR</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ad ducimus ipsum saepe, similique delectus eveniet suscipit.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
          <Text style={styles.listtext}>CAR LIST</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
          component={Homescreen}
          options={{
            title: 'Home',
          }}></Stack.Screen>
        <Stack.Screen name="CarList" component={CarList}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={CarDetails}
          options={{title: 'CarDetails'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
