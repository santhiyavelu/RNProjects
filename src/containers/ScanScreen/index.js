import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import LocationHelper from '../../helper/locationhelper';
import * as Animatable from 'react-native-animatable';

const ScanScreen = ({navigation}) => {
  const [isScanning, setIsScanning] = useState(false);

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

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <Animatable.Text
          animation="slideInDown"
          iterationCount={10}
          direction="alternate"
          style={styles.animationText}>
          Up and down you go
        </Animatable.Text>
        <Animatable.Text
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.animationText}>
          ❤️
        </Animatable.Text>
        <Animatable.View animation="rotate" ref={ref => (this.view = ref)}>
          <Text style={styles.animationText}>Zoom me out</Text>
        </Animatable.View>
        <TouchableWithoutFeedback onPress={() => this.view.bounce(800)}>
          <View>
            <Text style={styles.animationText}>Bounce me!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      {isScanning ? (
        <QRCodeScanner
          onRead={onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <Animatable.View animation="bounceIn" delay={1000}>
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            </Animatable.View>
          }
        />
      ) : (
        <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
        <Text style={styles.homeLink}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  animationContainer: {
    marginBottom: 20,
  },
  animationText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  centerText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  scanButton: {
    backgroundColor: 'rgb(0,122,255)',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  homeLink: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
});

export default ScanScreen;
