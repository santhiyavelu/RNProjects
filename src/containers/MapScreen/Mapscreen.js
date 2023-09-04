import {useRef, useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MapControl from '../../controls/MapControl';
import LocationHelper from '../../helper/locationhelper';

const MapScreen = () => {
  const parentControlMapRef = useRef(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    LocationHelper.checkLocationPermission(
      () => {
        LocationHelper.fetchLocation(
          locationObject => {
            if (locationObject.coords) {
              console.log(locationObject.coords, 'locationObject.coords');
              parentControlMapRef.current.animateToCustomLocation({
                latitude: locationObject.coords.latitude,
                longitude: locationObject.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              setCurrentLocation(locationObject.coords);
            }
          },
          error => {},
        );
      },
      () => {},
    );
  }, []);

  const showCurrentUserLocation = () => {
    if (parentControlMapRef.current && currentLocation) {
      console.log('pressed');
      // Update the map to the current user's location when the button is pressed
      parentControlMapRef.current.animateToCustomLocation({
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>maps</Text>
      <MapControl ref={parentControlMapRef} style={{flex: 1}} />
      <TouchableOpacity
        onPress={showCurrentUserLocation}
        style={{
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 20,
          backgroundColor: 'red',
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
