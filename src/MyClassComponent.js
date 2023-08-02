import React from 'react';
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';

const bodyText = 'Class Component';

class MyClasssComponent extends React.Component {
  state = {count: 0, textinput: 'Enter the Mail'};

  onHandleStateCount = () => {
    this.setState({count: this.state.count + 1});
  };

  onHandleStateText = () => {
    this.setState({textinput: this.state.textinput});
  };

  renderAuthorizedView = () => {
    return <Text>Hey! This is Example of HOC. It is an Authorized view.</Text>;
  };

  renderUnAuthorizedView = () => {
    return <Text>Sorry!. It is an UnAuthorized view.</Text>;
  };

  render() {
    const {children, bgcolor} = this.props;

    console.log(children, 'props');

    return (
      <View
        style={{
          backgroundColor: bgcolor,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text style={{fontSize: 20}}>{bodyText}</Text>
        {bgcolor == 'skyblue'
          ? this.renderAuthorizedView()
          : this.renderUnAuthorizedView()}
        <Text>{children}</Text>
        <TextInput onChangeText={this.onHandleStateText} />
        <TextInput>{this.state.textinput}</TextInput>
        <Text style={{fontSize: 20}}>{this.state.count}</Text>

        <Button title="Press Me" onPress={this.onHandleStateCount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
});

export default MyClasssComponent;
