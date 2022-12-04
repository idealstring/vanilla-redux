import { createStore } from "redux";

const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((el) => el.id !== action.id);
    default:
      return [];
  }
};

const store = createStore(reducer);

// const createTodo = (toDo) => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = Number(e.target.parentNode.id);
  // const id = e.target.parentElement.id;
  store.dispatch(deleteToDo(id));
};

const paintTodo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = "Delete";
    // btn.onclick = deleteToDo;
    btn.addEventListener("click", dispatchDeleteToDo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodo);

const addBtn = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // createTodo(toDo);
  // store.dispatch({ type: ADD_TODO, text: toDo });
  dispatchAddToDo(toDo);
};

button.addEventListener("click", addBtn);
