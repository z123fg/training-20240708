import CounterAPIs from "../../APIs/mockCounterAPIs";

const counterReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    case "UPDATE":
      return payload;
    default:
      return state;
  }
};

// thunk action creator
function addToCounter(payload) {
  // thunk function
  return async function addToCounterThunk(dispatch, getState) {
    console.log(
      "before dispatch in thunk function",
      getState().counter,
      payload
    );
    const response = await CounterAPIs.addCount();
    dispatch({
      type: "UPDATE",
      payload: response,
    });
    console.log("after dispatch in thunk function", getState().counter);
  };
}

export { counterReducer, addToCounter };
