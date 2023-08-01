import {View, Text, Button} from 'react-native';

const bodyText = 'Function Component';
const MyFuncComponent = () => {
  return (
    <View>
      <Text>{bodyText}</Text>
      <Button title="Press Me" />
    </View>
  );
};

export default MyFuncComponent;
