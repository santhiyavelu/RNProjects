import React, {useState, useCallback, useMemo} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = ({navigation}) => {
  const [count, setCount] = useState(0);

  // Scenario 1: useCallback to memoize a function
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Scenario 2: useMemo to memoize a calculated value
  const squaredCount = useMemo(() => {
    console.log('Calling UseMemo for square count...');
    return count * count;
  }, [count]);

  console.log('ParentComponent rendering');

  return (
    <View style={[styles.componentContainer, styles.parentContainer]}>
      <Text>Parent Component</Text>
      <Text>Count (Parent): {count}</Text>
      <Text>Squared Count (Parent Memoized): {squaredCount}</Text>
      <TouchableOpacity onPress={incrementCount} style={styles.button}>
        <Text style={styles.buttonText}>Increment Count (Parent)</Text>
      </TouchableOpacity>
      <ChildComponent increment={incrementCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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

export default ParentComponent;
