import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;

      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToAdd.name;
      });

      if (itemPresentKey !== -1) {
        const itemFound = state.cartItems[itemPresentKey];
        itemFound.quantity += 1;
      } else {
        state.cartItems.push({item: itemToAdd, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = action.payload;

      const itemPresentKey = state.cartItems.findIndex(thisElement => {
        return thisElement.item.name === itemToRemove.name;
      });

      if (itemPresentKey !== -1) {
        const itemFound = state.cartItems[itemPresentKey];
        if (itemFound.quantity > 1) {
          itemFound.quantity -= 1; // reduce the item quantity
        } else {
          state.cartItems.splice(itemPresentKey, 1); // remove all item completely
        }
      }
    },
    clearCart: state => {
      state.cartItems = [];
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

// [
//   {
//     name: 'Macbook',
//     details: 'Macbook pro with core i9',
//     price: 2000,
//   },
//   {
//     name: 'Macbook',
//     details: 'Macbook pro with core i9',
//     price: 2000,
//   },
// ]

// [
//   {
//     item: {
//       name: 'Macbook',
//       details: 'Macbook pro with core i9',
//       price: 2000,
//     },
//     quantity: 2,
//   }
// ];
