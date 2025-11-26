// import { createSlice } from '../redux.js';

// export const { reducer, actions } = createSlice({
//   name: 'amount',
//   initialState: 100,
//   reducers: {
//     add: (amount, payload) => amount + payload,
//     take: (amount, payload) => amount - payload,
//     clear: () => 0,
//   }
// })

export function reducer(amount = 100, action) {
  switch (action.type) {
    case "amount/add":
      return amount + action.payload;

    case "amount/take":
      return amount - action.payload;

    case "amount/clear":
      return 0;

    default:
      return amount;
  }
}

export const actions = {
  add: (payload) => ({ type: 'amount/add', payload }),
  take: (payload) => ({ type: 'amount/take', payload }),
  clear: () => ({ type: 'amount/clear' }),
}
