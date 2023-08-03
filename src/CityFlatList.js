import {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

const cityData = [
  {
    id: 1,
    city: 'London',
  },
  {
    id: 2,
    city: 'Liverpool',
  },
  {
    id: 3,
    city: 'Nottingham',
  },
  {
    id: 4,
    city: 'Southa',
  },
  {id: 5, city: 'chennai'},
  {id: 6, city: 'London'},
];

const CityFlatlist = () => {
  const [getCity, setcitylist] = useState('Type city');
  const [isModalVisible, setisModalvisible] = useState(false);
  const [cityValues, setCityvalues] = useState(cityData);

  const toggleModal = () => {
    setisModalvisible(!isModalVisible);
  };

  const renderModal = () => {
    return (
      <View style={{flex: 1}}>
        <Button title="Show modal" onPress={toggleModal} />
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={getCity}
        onChangeText={changedcityName => {
          setcitylist(changedcityName);
        }}></TextInput>
      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => {
          setCityvalues([...cityValues, {city: getCity}]); //Using spread operator appending the data from static cityData
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <FlatList
        data={cityValues}
        renderItem={({item, index}) => (
          <Text style={styles.cityList}>{item.city} </Text>
        )}
      />
      {renderModal()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 20,
  },
  cityList: {
    backgroundColor: '#DDDDDD',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    // marginHorizontal: 16,
    fontSize: 20,
  },
});

export default CityFlatlist;
