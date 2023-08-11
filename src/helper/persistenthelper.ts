import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistentHelper {
  setData = async (key, value) => {
    try {
      await AsyncStorage.setItem('key', value);
    } catch (e) {
      // saving error
    }
  };

  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // value previously stored

        return value;
      }
    } catch (e) {
      // error reading value
    }
  };
  deleteValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }
  };
}

export default new PersistentHelper();
