import React from 'react';
import {Text, Image, View} from 'react-native';

class CustomFlex extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}>
        <View style={{width: 100, height: 100, backgroundColor: 'yellow'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'orange'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'green'}} />
      </View>
    );
  }
}

export default CustomFlex;
