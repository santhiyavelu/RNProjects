import React from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import CommonTextInput from './CommonTextInput';

const UserProfile = () => {
  return (
    <View>
      <CommonTextInput placeholder="First Name" />
      <CommonTextInput placeholder="Last Name" />
      <CommonTextInput placeholder="City" />
      <CommonTextInput placeholder="Country" />

      <TouchableOpacity>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfile;
