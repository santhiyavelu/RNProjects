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
    // Create a reference to the 'Cars' collection
    const carCollection = firestore().collection('Cars');

    // Add a real-time listener
    const unsubscribe = carCollection.onSnapshot(querySnapshot => {
      const cars = [];

      // Iterate through the documents in the collection
      querySnapshot.forEach(documentSnapshot => {
        const data = documentSnapshot.data();
        const id = documentSnapshot.id;
        cars.push({id, ...data});
      });

      // Update the carList state with the new data
      setCarList(cars);
    });

    // Return a cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const addCar = () => {
    // Add a new car document to the 'Cars' collection
    firestore()
      .collection('Cars')
      .add({
        carType,
        carName,
      })
      .then(() => {
        alert('Car added!');
        // No need to call fetchCars() here
      })
      .catch(error => {
        console.log(error);
      });
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
                <Text style={styles.carName}>{item.carName}</Text>
                <Text style={styles.carType}>{item.carType}</Text>
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
          addCar(); // Call the addCar function to add a new car
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
