import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home({ toDos, addToDo, initailData }) {
  //   console.log(props);
  const [text, setText] = useState();
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  useEffect(() => {
    if (localStorage.getItem("toDos")) {
      initailData(JSON.parse(localStorage.getItem("toDos")));
    }
  }, [initailData]);
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type={text} value={text} onChange={onChange} />
        <button>add</button>
        <ul>
          {toDos.map((toDo) => (
            <ToDo {...toDo} key={toDo.id} />
          ))}
        </ul>
      </form>
    </>
  );
}

// function getCuurentState(state, ownProps) {}
// function mapStateToProps(state, ownProps) {}
// function mapDispatchToProps(state, ownProps) {}
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    initailData: (array) => dispatch(actionCreators.initailData(array)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(null, mapDispatchToProps)(Home); // state는 필요 없고 dispatch만 필요할 때
