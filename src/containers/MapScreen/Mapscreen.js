import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import LocationHelper from '../../helper/locationhelper';

const markersArray = [
  {lat: 0, lon: 0},
  {lat: 0.5, lon: 0.5},
  {lat: 1, lon: 1},
  {lat: 1.5, lon: 1.5},
  {lat: 2, lon: 2},
  {lat: 2.5, lon: 2.5},
];

const MapScreen = ({navigation}) => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const getuserLocation = () => {
      LocationHelper.fetchLocation(
        position => {
          console.log(position, 'mapposition');
          // const {latitude, longitude} = position.coords;
          // setUserLocation({latitude, longitude});
        },
        error => {
          console.log(error.message, 'Maperror');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    };
    getuserLocation();
  }, []);

  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove provider if not using google map
        style={{flex: 1}}
        ref={mapRef}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}>
        {markersArray.map((item, index) => (
          <Marker
            key={index}
            coordinate={{latitude: item.lat, longitude: item.lon}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'blue',
              }}
            />
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity
        onPress={() => {
          mapRef.current.animateToRegion({
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          });
        }}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'red',
          height: 44,
          width: 44,
          borderRadius: 22,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text>Press</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;
