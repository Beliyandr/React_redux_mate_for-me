import { actions as amountActions } from "./store/amount.js";
import { actions as goodsActions } from "./store/goods.js";
import { actions as positionActions } from "./store/position.js";
import { store } from "./store/index.js";

const { dispatch, subscribe, getState } = store;

const state = getState();

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

console.log(state);
dispatch(positionActions.moveUp());
dispatch(positionActions.moveRight());
dispatch(positionActions.moveRight());
dispatch(positionActions.moveRight());
dispatch(positionActions.moveRight());
dispatch(positionActions.moveRight());
dispatch(positionActions.moveDown());
console.log(getState());
dispatch(amountActions.add(50));
dispatch(goodsActions.add(50));
dispatch(amountActions.take(20));
dispatch(goodsActions.add(50));
dispatch(amountActions.take(20));
dispatch(amountActions.clear());
console.log(state);
// unsubscribe();
