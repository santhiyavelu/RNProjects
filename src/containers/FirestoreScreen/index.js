import {useEffect, useState} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FirestoreScreen = ({navigation}) => {
  const [carList, setCarList] = useState([]);
  const [carType, setCarType] = useState('');
  const [carName, setCarName] = useState('');

  useEffect(() => {
    fetchcars();
  }, []);

  const fetchcars = async () => {
    try {
      const carCollection = await firestore()
        .collection('Cars')
        // .where('carType', '==', 'Hatchback')
        .get();

      setCarList(carCollection._docs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <Text>firestore</Text>
      <FlatList
        data={carList}
        renderItem={({item, index}) => {
          console.log(item);

          return (
            <View>
              <Text>{item._data.carName}</Text>
              <Text>{item._data.carType}</Text>
            </View>
          );
        }}
      />
      <TextInput
        placeholder="Car Type"
        value={carType}
        style={{
          height: 40,
          backgroundColor: 'yellow',
          margin: 10,
        }}
        onChangeText={changedText => {
          setCarType(changedText);
        }}
      />

      <TextInput
        placeholder="Car Name"
        value={carName}
        style={{
          height: 40,
          backgroundColor: 'yellow',
          margin: 10,
        }}
        onChangeText={changedText => {
          setCarName(changedText);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          firestore()
            .collection('Cars')
            .add({
              carType,
              carName,
            })
            .then(() => {
              console.log('User added!');
              fetchcars();
            })
            .catch(error => {
              console.log(error);
            });
        }}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirestoreScreen;
