import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) =>
      void state.push({ text: action.payload, id: Date.now() }),
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== Number(action.payload)),
  },
});
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
