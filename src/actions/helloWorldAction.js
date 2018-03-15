import types from "./types";

export const helloWorld = () => async (dispatch, getState) => {
  const res = { name: "Hello WorldXX" };
  console.log("called helloworld action");
  dispatch({
    type: types.HELLO_WORLD,
    payload: res
  });
};
