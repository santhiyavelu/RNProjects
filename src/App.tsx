/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, TextInput, StyleSheet, View} from 'react-native';
import MyClasssComponent from './MyClassComponent';
import MyFuncComponent from './MyFuncComponent';
import UserProfile from './UserProfile';
import CustomFlex from './CustomFlex';

function App(): JSX.Element {
  return (
    // <SafeAreaView>

    <>
      <MyClasssComponent />
      <MyFuncComponent />
      <CustomFlex />
    </>
    // </SafeAreaView>
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
