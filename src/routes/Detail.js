import { connect } from "react-redux";
import { useParams } from "react-router-dom";
// import { actionCreators } from "../store";
import { remove } from "../store";

const Detail = ({ toDos, onBtnClick }) => {
  const { id } = useParams();
  //   console.log(toDos);
  const toDo = toDos.find((toDo) => toDo.id === Number(id));
  //   console.log(toDo);

  return (
    <div>
      <h3>{toDo?.text}</h3>
      {`id: ${id}`}
      <button onClick={onBtnClick(id)}>delete</button>
    </div>
  );
};

function mapStateToProps(state) {
  //   console.log(ownProps);
  //   const {
  //     match: {
  //       params: { id },
  //     },
  //   } = ownProps;
  // router-dom 6 이상 버전에서는 history, location, match 등 props를 가지고 있지 않음.
  //   return { toDo: state.find((toDo) => toDo.id === Number(id)) };
  //   return ownProps;
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    // onBtnClick: (id) => dispatch(actionCreators.deleteToDo(id)),
    onBtnClick: (id) => dispatch(remove(id)),
    // onBtnClick: (id) => console.log(id),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
