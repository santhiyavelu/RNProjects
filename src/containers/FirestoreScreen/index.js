import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const FirestoreScreen = ({navigation}) => {
  const [carList, setCarList] = useState([]);
  const [carType, setCarType] = useState('');
  const [carName, setCarName] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const carCollection = await firestore().collection('Cars').get();

      setCarList(carCollection.docs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Firestore</Text>
      <FlatList
        data={carList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.carItem}>
              <View style={styles.carInfo}>
                <Text style={styles.carName}>{item.data().carName}</Text>
                <Text style={styles.carType}>{item.data().carType}</Text>
              </View>
            </View>
          );
        }}
      />
      <TextInput
        placeholder="Car Type"
        value={carType}
        style={styles.input}
        onChangeText={changedText => {
          setCarType(changedText);
        }}
      />

      <TextInput
        placeholder="Car Name"
        value={carName}
        style={styles.input}
        onChangeText={changedText => {
          setCarName(changedText);
        }}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          firestore()
            .collection('Cars')
            .add({
              carType,
              carName,
            })
            .then(() => {
              alert('Car added!');
              fetchCars();
            })
            .catch(error => {
              console.log(error);
            });
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  carItem: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  carInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carType: {
    fontSize: 16,
  },
  input: {
    height: 40,
    backgroundColor: '#f0f0f0',
    margin: 10,
    padding: 10,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FirestoreScreen;
