import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {cartActions} from '../../features/cart/cartSlice';

const itemlist = [
  {
    name: 'Macbook',
    details: 'Macbook pro with core i9',
    price: 2000,
  },
  {
    name: 'iPhone',
    details: 'iphone 14 pro',
    price: 1000,
  },
  {
    name: 'Vacuum Cleaner',
    details: 'Less power consumption, more cleaning',
    price: 500,
  },
  {
    name: 'iPad',
    details: 'Sleek and smart',
    price: 800,
  },
  {
    name: 'Microwave',
    details: 'less power consumptin, more cooking',
    price: 500,
  },
  {
    name: 'Iron',
    details: 'less power consumption',
    price: 200,
  },
  {
    name: 'LED TV',
    details: 'Reliable true colors',
    price: 1200,
  },
  {
    name: 'Washing Machine',
    details: 'less power consumption',
    price: 800,
  },
];

const ListScreen = props => {
  const [fetchedData, setFetchedData] = useState(itemlist);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/todos', {})
  //     .then(x => x.json())
  //     .then(data => {
  //       setFetchedData(data);
  //     })
  //     .catch(err => {
  //       console.log(err, 'error');
  //     });
  // }, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          height: 50,
          margin: 10,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.navigation.navigate('CartScreen');
        }}>
        <Text>Go to cart</Text>
      </TouchableOpacity>

      <FlatList
        data={fetchedData}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 60,
              marginHorizontal: 10,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <Text>
                {item.name}
                {item.details}
              </Text>
            </View>
            <Text style={{width: 50}}>{item.price}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(cartActions.addToCart(item));
              }}
              style={{
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Text numberOfLines={2}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ListScreen;
