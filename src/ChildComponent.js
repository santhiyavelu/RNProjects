import React, {useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// ChildComponent is wrapped with React.memo to memoize it
const ChildComponent = React.memo(({increment}) => {
  console.log('ChildComponent rendering');

  return (
    <View style={[styles.componentContainer, styles.childContainer]}>
      <Text>Child Component</Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>Increment Count (Child)</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  componentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  childContainer: {
    borderColor: 'red',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
});

export default ChildComponent;
