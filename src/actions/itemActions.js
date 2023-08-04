import { ITEM_TYPES } from "../types";
const addItem = (value) => ({
  type: ITEM_TYPES.ADD_ITEM,
  payload: {
    item: value,
  },
});

const removeItem = (value) => ({
  type: ITEM_TYPES.REMOVE_ITEM,
  payload: value,
});

export { addItem, removeItem };
