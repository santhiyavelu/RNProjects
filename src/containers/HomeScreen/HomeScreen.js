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

const image = {
  uri: '/Users/santhiyavelusamy/Documents/AwesomeProject1/src/assets/car1.jpg',
};

const Homescreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Welcome! {getUser}</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ad ducimus ipsum saepe, similique delectus eveniet suscipit.
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CarList')}>
          {/* <Text style={styles.listtext}>CAR LIST</Text> */}
        </TouchableOpacity>
      </ImageBackground>

      <TouchableOpacity
        onPress={() => {
          persistenthelper.deleteValue('username', null);

          EventRegister.emit('userLoggedIn', {username: undefined});
        }}
        style={{
          height: 50,
          margin: 10,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
});

export default Homescreen;
