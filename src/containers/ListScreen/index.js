import {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

const ListScreen = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos', {})
      .then(x => x.json())
      .then(data => {
        setFetchedData(data);
      })
      .catch(err => {
        console.log(err, 'error');
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={fetchedData}
        renderItem={({item, index}) => (
          <Text>
            {item.id}
            {item.title}
          </Text>
        )}
      />
    </View>
  );
};

export default ListScreen;
