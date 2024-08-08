import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { carsReducer } from "./slices/CarsSlice";
import { counterReducer } from "./slices/CounterSlice";

const rootReducer = combineReducers({
  cars: carsReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const createMyStore = (reducer, preloadedState = {}, enhancer = undefined) => {
  if (enhancer) {
    // return enhancer(...)...
  }

  const store = {};
  store.state = preloadedState;
  store.callbackFns = [];

  store.getState = () => {
    return store.state;
  };

  store.dispatch = (action) => {
    store.state = reducer(store.state, action);

    // call all the subscribed callback functions
    store.callbackFns.forEach((fn) => fn(action));
  };

  store.subscribe = (callbackFn) => {
    store.callbackFns.push(callbackFn);
    return () => {
      store.callbackFns.filter((fn) => fn !== callbackFn);
    };
  };

  store.dispatch({ type: "redux/INIT" });

  return store;
};

export default store;
