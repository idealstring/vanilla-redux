import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// string으로 써도 되지만, 이렇게 하는 이유는, dispatch에 스펠링을 잘못 썼을 경우 오류를 알아내기 쉬움.
// 스크링으로 하면 무엇이 틀렸는지 모르는 상태로, 그냥 작동 안되는 것만 볼 수 있음.

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  // console.log(count, action);
  // if (action.type === "ADD") {
  //   return count + 1;
  // } else if (action.type === "MINUS") {
  //   return count - 1;
  // } else {
  //   return count;
  // }
  // redux에선 switch를 선호함. 깔끔하니까. 물론 어떤 방법이든 원하는 방법으로 설정가능.

  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

// console.log(countStore);
// console.log(countStore.getState());
// countStore.dispatch({ type: "ADD" });
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
