import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { itemActions } from "../../actions"; 

const TodoInput = ({ addItem }) => {
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      setValue("");
    },
    [setValue]
  );

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button>Add item</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
    return ({
        addItem: itemActions.addItem
    })
}

export default connect(null, mapDispatchToProps)(TodoInput);
