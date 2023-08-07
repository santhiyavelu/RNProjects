import React from 'react';
import {View, Text, LogBox, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const CarDetails = ({route, navigation}) => {
  const {Make, Model, color, year, price} = route.params.item;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#FCFCFC',
      }}>
      <Text style={styles.headertext}>{Make} Details</Text>
      {/* <Text>Make: {JSON.stringify(Make)}</Text> */}
      <Text style={styles.detailtext}>Model: {Model}</Text>
      <Text style={styles.detailtext}>Color: {color}</Text>
      <Text style={styles.detailtext}>Year: {year}</Text>
      <Text style={styles.detailtext}>Price: {price}</Text>
      <View style={{marginTop: 30}}>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headertext: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    margin: 15,
  },
  detailtext: {
    fontSize: 20,
    padding: 5,
  },
});
export default CarDetails;
