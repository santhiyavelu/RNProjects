import React, {useState} from 'react';
import {
  View,
  Text,
  LogBox,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';

const DATA = [
  {
    id: '1',
    Make: 'BMW iX',
    Model: 'Electric',
    year: '2023',
    color: 'Black',
    price: '£69,905',
  },
  {
    id: '2',
    Make: 'Honda Jazz',
    Model: 'Petrol',
    year: '2020',
    color: 'White',
    price: '£39,905',
  },
  {
    id: '3',
    Make: 'Toyato',
    Model: 'Diesel',
    year: '2021',
    color: 'Red',
    price: '£20,000',
  },
];

const CarList = ({navigation}) => {
  const [getcarData, setcarData] = useState(DATA);
  const [isModalValue, setisModalvalue] = useState(false);
  const [getNewCarData, setNewCarData] = useState('Add your Favourite Car');

  const onsubmitHandler = index => {
    setcarData([...getcarData, {id: index, Make: getNewCarData}]); //Using spread operator appending the data into static car data
    setisModalvalue(false);
    setNewCarData('Add your Favourite Car');
  };

  const renderModal = () => {
    return (
      <Modal isVisible={isModalValue}>
        <View>
          <TextInput
            style={styles.item}
            value={getNewCarData}
            autoCapitalize="none"
            onChangeText={changedcarName => {
              setNewCarData(changedcarName);
            }}></TextInput>
          <TouchableOpacity
            style={{
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}
            onPress={index => {
              onsubmitHandler(index);
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F4EEE1',
      }}>
      <FlatList
        style={styles.container}
        data={getcarData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.flatList}
            onPress={() => navigation.navigate('Details', {item})}>
            <Text style={styles.item}>
              {item.Make} {item.Model}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Button
        title="Click here to add more cars..."
        onPress={() => {
          setisModalvalue(true);
        }}
      />
      {renderModal()}

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  item: {
    color: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  flatList: {
    height: 50,
    backgroundColor: '#000000c0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default CarList;
