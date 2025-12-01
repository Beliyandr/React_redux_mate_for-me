// import { createSlice } from '../redux.js';

import { createSlice } from "../redux";

// export const { reducer, actions } = createSlice({
//   name: 'amount',
//   initialState: 100,
//   reducers: {
//     add: (amount, payload) => amount + payload,
//     take: (amount, payload) => amount - payload,
//     clear: () => 0,
//   }
// })

// const TYPE_ADD = 'amount/add';
// const TYPE_TAKE = 'amount/take';
// const TYPE_CLEAR = 'amount/clear';

// export function reducer(amount = 100, action) {
//   switch (action.type) {
//     case TYPE_ADD:
//       return amount + action.payload;

//     case TYPE_TAKE:
//       return amount - action.payload;

//     case TYPE_CLEAR:
//       return 0;

//     default:
//       return amount;
//   }
// }

// export const actions = {
//   add: (payload) => ({ type: TYPE_ADD, payload }),
//   take: (payload) => ({ type: TYPE_TAKE, payload }),
//   clear: () => ({ type: TYPE_CLEAR }),
// }

export const { reducer, actions } = createSlice({
  amount: 100,
  name: "amount",
  reducers: {
    add: (amount, payload) => amount + payload,
    take: (amount, payload) => amount - payload,
    clear: () => 0,
  },
});
