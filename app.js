import { actions } from './store/amount.js';
import { store } from "./store/index.js";

const { dispatch, subscribe, getState } = store;

const unsubscribe = subscribe(() => {
  const amount = getState();
  console.log(amount);
});

dispatch(actions.add(50));

dispatch({ type: "take", payload: 30 });
dispatch({ type: 'goods/take', payload: 30 });
// unsubscribe();
dispatch({ type: "take", payload: 30 });
dispatch({ type: "take", payload: 30 });
dispatch({ type: "add", payload: 10 });
dispatch({ type: "clear" });

dispatch({ type: "take", payload: 30 });
dispatch({ type: "add", payload: 70 });
