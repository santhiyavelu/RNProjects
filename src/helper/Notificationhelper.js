import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

class NotificationHelper {
  getToken = () => {
    messaging()
      .getToken()
      .then(token => {
        console.log('here is token');
        console.log(token);
      });
  };

  refreshToken = () => {
    messaging().onTokenRefresh(token => {
      console.log('here is refreshed token');
      console.log(token);
    });
  };

  initializeFCM = (onRecieve, onTap) => {
    this.messageListener = messaging().onMessage(async remoteMessage => {
      console.log(remoteMessage, 'message from FCM');

      //external callback if any
      if (onRecieve) {
        onsetForeGroundNotification(remoteMessage);
        onRecieve(remoteMessage);
      }
    });

    onsetForeGroundNotification = async message => {
      try {
        console.log(message, 'foreground message');
        // Request permissions (required for iOS)
        // if (Platform.os == 'ios') {
        await notifee.requestPermission();
        // }

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
          id: 'default',
          name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
          title: message.notification?.title,
          body: message.notification?.body,
          android: {
            channelId,
            // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
            // pressAction is needed if you want the notification to open the app when pressed
            pressAction: {
              id: 'default',
            },
          },
        });

        console.log('Notification displayed successfully');
      } catch (error) {
        console.error('Error displaying notification:', error);
      }
    };

    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);

      //external callback if any
      if (onTap) {
        onTap(remoteMessage);
      }
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(remoteMessage);
    });

    messaging()
      .subscribeToTopic('')
      .then(() => {
        console.log('');
      })
      .catch(err => {
        console.log(err);
      });
  };

  checkFCMPermission = async () => {
    const authStatus = await messaging().requestPermission();

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  getInitialNotification = () => {
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(remoteMessage);
      });
  };

  unMount = () => {
    this.messageListener();
  };
}

export default new NotificationHelper();
