import { actions as amountActions } from './store/amount.js';
import { actions as goodsActions } from './store/goods.js';
import { actions as positionActions } from './store/position.js';
import { store } from './store/index.js';

const { subscribe, getState, dispatch } = store;

// const state = getState();
// console.log(state);

// const unsubscribe = subscribe(() => {
//   const state = getState();
//   console.log(state.amount);
// });

// dispatch(positionActions.moveUp())
// dispatch(positionActions.moveUp())
// dispatch(positionActions.moveLeft())
// dispatch(amountActions.add(50));
// dispatch(amountActions.add(10));
// dispatch(goodsActions.add(10));
// dispatch(amountActions.take(10));
// dispatch(amountActions.take(40));
// dispatch(goodsActions.add(40));
// dispatch(amountActions.clear());

// unsubscribe();

function amountReducer(amount, action) {
  switch (action.type) {
    case 'add':
      return amount + action.payload;

    case 'take':
      return amount - action.payload;

    case 'clear':
      return 0;

    default:
      return amount;
  }
}

let amount = 120;
console.log(amount);

amount += 20 // {type: 'add', payload: 20}
console.log(amount);

amount -= 50 // {type: 'take', payload: 50}
console.log(amount);

amount += 40 // {type: 'add', payload: 40}
console.log(amount);

amount = 0 // {type: 'clear'}
console.log(amount);
