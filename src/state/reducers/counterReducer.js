const initialState = {
  counter: 10,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
}

export default counterReducer;
