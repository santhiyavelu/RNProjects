import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const bodyText = 'Function Component';
const MyFuncComponent = () => {
  const [getcount, setCount] = useState(0);
  const onPress = () => setCount(getcount => getcount + 1);

  return (
    <View style={styles.container}>
      <Text style={{color: 'red', fontSize: 20}}>{bodyText}</Text>
      <Text>Count: {getcount}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default MyFuncComponent;
