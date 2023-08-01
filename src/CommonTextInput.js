import {TextInput} from 'react-native';

const CommonTextInput = props => {
  //   const {placeholder} = props;  destructuring props

  return (
    <TextInput
      value={''}
      placeholder={props?.placeholder}
      style={{marginVertical: 8, backgroundColor: 'white', height: 40}}
    />
  );
};

export default CommonTextInput;
