import {} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {cartActions} from '../../features/cart/cartSlice';

const CartScreen = props => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cartItems}
        renderItem={({item, index}) => {
          return (
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
                <Text>{item.item.name}</Text>
                <Text>{item.item.details}</Text>
              </View>
              <Text style={{width: 80}}>Quantity: {item.quantity}</Text>
              <Text style={{width: 50}}>{item.item.price}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(cartActions.removeFromCart(item.item));
                }}
                style={{
                  width: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text numberOfLines={2}>Remove cart</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(cartActions.clearCart());
        }}
        style={{
          height: 50,
          margin: 10,
          backgroundColor: 'white',
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text numberOfLines={2}>Clear cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
