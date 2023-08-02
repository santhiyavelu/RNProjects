import React from 'react';
import {Text, Image, View} from 'react-native';

class CustomFlex extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <View style={{flex: 2, backgroundColor: 'pink'}} />
        <View style={{flex: 3, backgroundColor: 'darkorange'}} />
        <View style={{flex: 4, backgroundColor: 'green'}} />
      </View>
    );
  }
}

export default CustomFlex;
