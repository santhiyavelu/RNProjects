import React from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

const bodyText = 'Class Component';
console.log(bodyText, 'text');

class MyClasssComponent extends React.Component {
  state = {count: 0, textinput: 'Enter the Mail'};

  onHandleStateCount = () => {
    this.setState({count: this.state.count + 1});
  };

  onHandleStateText = () => {
    this.setState({textinput: this.state.textinput});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 20}}>{bodyText}</Text>
        <TextInput
          placeholder={this.onHandleStateText}
          onChangeText={this.onHandleStateText}
        />
        <TextInput>{this.state.textinput}</TextInput>
        <TextInput style={{fontSize: 20}}>{this.state.count}</TextInput>

        <Button title="Press Me" onPress={this.onHandleStateCount} />
      </View>
    );
  }
}

export default MyClasssComponent;
