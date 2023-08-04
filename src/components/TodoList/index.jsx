import { useCallback } from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";
import { itemActions } from "../../actions";

const TodoList = ({ list, removeItem }) => {
  const onClickRemove = useCallback(
    (item) => {
      removeItem(item);
    },
    [removeItem]
  );

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
  return {
    list: state.itemReducers.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (value) => dispatch(itemActions.removeItem(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
