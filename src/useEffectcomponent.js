import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

const UseEffectcomponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000);
  }, []); // adding dependncy array runs only on first render

  return (
    <View
      style={{
        felx: 1,
        margin: 25,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>I have rendered {count} times !</Text>
    </View>
  );
};

export default UseEffectcomponent;
