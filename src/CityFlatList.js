import {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [getmodalvalue, setModalvalue] = useState('');
  const [isModalVisible, setisModalvisible] = useState(true);
  const [cityValues, setCityvalues] = useState(cityData);

  const toggleModal = () => {
    setisModalvisible(!isModalVisible);
  };

  const renderModal = () => {
    return (
      <Modal isVisible={isModalVisible}>
        <View>
          <TextInput
            placeholder="Type here to add city"
            value={getmodalvalue}
            autoCapitalize="none"
            onChangeText={changedcityName => {
              setModalvalue(changedcityName);
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
              setCityvalues([...cityValues, {city: getmodalvalue}]); //Using spread operator appending the data from static cityData
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    );
  };
  const handleSearch = searchText => {
    if (searchText) {
      const filteredData = cityValues.filter(cityname => {
        return cityname.city.includes(searchText);
      });
      console.log(filteredData, 'filtered');
      setCityvalues(filteredData);
    } else {
      setCityvalues(cityData);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.searchBox}
          placeholder="Search Here"
          value={searchTerm}
          autoCapitalize="none"
          onChangeText={changedcityName => {
            handleSearch(changedcityName);
            setSearchTerm(changedcityName);
          }}></TextInput>
        <FlatList
          style={styles.container}
          data={cityValues}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <Text style={styles.cityList}>{item.city} </Text>
          )}
        />
        <Button
          title="Show Modal"
          style={{
            backgroundColor: 'green',
            borderColor: '#CCC',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 20,
          }}
          onPress={toggleModal}
        />
      </View>
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
    padding: 5,
    marginHorizontal: 10,
    fontSize: 20,
  },
  searchBox: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default CityFlatlist;
