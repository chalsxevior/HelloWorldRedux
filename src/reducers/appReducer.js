import types from "../actions/types";

export default (state = {}, action) => {
  console.log("Called reduceer");
  switch (action.type) {
    case types.HELLO_WORLD:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
