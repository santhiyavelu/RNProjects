import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import CommonTextInput from './CommonTextInput';
import CustomImage from './CustomFlex';

const UserProfile = () => {
  const onSubmit = () => console.log('submit');

  return (
    <View>
      <CommonTextInput placeholder="First Name" />
      <CommonTextInput placeholder="Last Name" />
      <CommonTextInput placeholder="City" />
      <CommonTextInput placeholder="Country" />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
