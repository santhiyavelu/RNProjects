import React, {useState} from 'react'; // Import useState
import {StyleSheet, Text, TouchableOpacity, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import LocationHelper from '../../helper/locationhelper';

const ScanScreen = ({navigation}) => {
  const [isScanning, setIsScanning] = useState(false); // Add state to track scanning

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occurred', err),
    );
  };

  const handleScan = async () => {
    LocationHelper.checkCameraPermission(
      () => {
        console.log('Camera permission granted');
        setIsScanning(true);
      },
      () => {
        console.log('Camera permission not granted');
      },
    );
  };

  return (
    <View>
      <View>
        {isScanning ? (
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerText}>
                Go to{' '}
                <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
                on your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <TouchableOpacity style={styles.buttonTouchable} onPress={handleScan}>
            <Text style={styles.buttonText}>Scan QR Code</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerText: {
    fontSize: 18,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTouchable: {
    padding: 16,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
});

export default ScanScreen;
