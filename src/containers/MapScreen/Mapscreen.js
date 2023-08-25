import MapView, {Marker} from 'react-native-maps';

import {Text, View, TouchableOpacity} from 'react-native';

const markersArray = [
  {lat: 0, lon: 0},
  {lat: 0.5, lon: 0.5},
  {lat: 1, lon: 1},
  {lat: 1.5, lon: 1.5},
  {lat: 2, lon: 2},
  {lat: 2.5, lon: 2.5},
];

const getRegion = () => {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
};

const displayMarkers = () => {
  return markersArray.map((item, index) => {
    return (
      <Marker coordinate={{latitude: item.lat, longitude: item.lon}}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: 'red',
          }}>
          <Text>a</Text>
        </View>
      </Marker>
    );
  });
};

const MapScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Welcome to MapScreen</Text>
      <MapView style={{flex: 1}} initialRegion={getRegion()} showsUserLocation>
        {displayMarkers()}
      </MapView>
      <TouchableOpacity
        onPress={() => {
          //   animateToRegion({
          //     latitude: 37.3346437,
          //     longitude: -122.0138429,
          //     latitudeDelta: 0.015,
          //     longitudeDelta: 0.0121,
          //   });
        }}
        style={{
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 20,
          backgroundColor: 'lightgreen',
          height: 44,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
