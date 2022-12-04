// import { createStore } from "redux";
import {
  configureStore,
  // createAction,
  // createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

/* const addToDo = (text) => {
  return { type: ADD, text };
};*/
//  const addToDo = createAction("ADD");

/*const deleteToDo = (id) => {
  return { type: DELETE, id };
}; */
// const deleteToDo = createAction("DELETE");

/*
const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      console.log(action);
      // return [{ text: action.text, id: Date.now() }, ...state];
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      // return state.filter((toDo) => toDo.id !== Number(action.id));
      return state.filter((toDo) => toDo.id !== Number(action.payload));
    case FIRST:
      return action.array;
    default:
      return state;
  }
};
*/
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     return state.filter((toDo) => toDo.id !== Number(action.payload));
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  // 이름헷갈릴까봐 add, remove로 바꿈.
  reducers: {
    add: (state, action) =>
      void state.push({ text: action.payload, id: Date.now() }),
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== Number(action.payload)),
  },
});
/* const store = createStore(reducer); */
// const store = configureStore({ reducer });
const store = configureStore({ reducer: toDos.reducer });

/*
export const actionCreators = {
  addToDo,
  deleteToDo,
};
*/
export const { add, remove } = toDos.actions;

export default store;

/*
redux
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const FIRST = "FIRST";

const addToDo = (text) => {
  return { type: ADD, text };
};

const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const initailData = (array) => {
  return { type: FIRST, array };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== Number(action.id));
    case FIRST:
      return action.array;
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
  initailData,
};

export default store;
*/
