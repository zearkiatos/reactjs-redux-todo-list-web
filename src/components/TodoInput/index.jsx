import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { itemActions } from "../../actions";

const TodoInput = ({ addItem }) => {
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      addItem(value);
      setValue("");
    },
    [setValue, addItem, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Add item</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (value) => dispatch(itemActions.addItem(value)),
  };
};

export default connect(null, mapDispatchToProps)(TodoInput);
