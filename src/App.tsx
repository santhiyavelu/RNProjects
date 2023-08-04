/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text, LogBox, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CityFlatlist from './CityFlatList';

const Homescreen = ({navigation}) => {
  console.log(navigation, 'navigation');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue',
      }}>
      <CityFlatlist />
      <Text>Home Screen</Text>
      {/* Navigate details to the Details route with params */}
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            message: 'anything you want order here',
          })
        }
      />
    </View>
  );
};

const DetailScreen = ({route, navigation}) => {
  const {itemId, message} = route.params;
  console.log(route.params, 'routerdetails');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
      }}>
      <Text>Details Screen</Text>
      <Text>item id: {JSON.stringify(itemId)}</Text>
      <Text>Message: {JSON.stringify(message)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {itemId: Math.floor(Math.random() * 100)})
        }
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Service Screen"
        onPress={() => navigation.navigate('Service')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ServiceScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <Text>Service Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{title: 'Home'}}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{title: 'Details'}}></Stack.Screen>
        <Stack.Screen name="Service" component={ServiceScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
