import { useCallback } from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";

const TodoList = ({ list }) => {
  const onClickRemove = useCallback((item) => {}, []);

  return (
    <div>
      {list &&
        list.map((i) => (
          <TodoItem keys={i.item} {...i} onClickRemove={onClickRemove} />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.itemReducers.items,
  };
};

export default connect(mapStateToProps)(TodoList);
