import { ITEM_TYPES } from "../types";
const addItem = (value) => ({
  type: ITEM_TYPES.ADD_ITEM,
  payload: {
    item: value,
  },
});

export { addItem };
