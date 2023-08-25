import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align buttons horizontally
  },
  submit: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1, // Equal width for both buttons
    marginHorizontal: 5, // Add some horizontal spacing between buttons
  },
  signupButton: {
    backgroundColor: 'blue',
  },
  loginButton: {
    backgroundColor: 'green', // Change the color for the login button
  },
  buttontext: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  fbButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
    marginHorizontal: 5, // Add some horizontal spacing between buttons
  },
});

export default styles;
