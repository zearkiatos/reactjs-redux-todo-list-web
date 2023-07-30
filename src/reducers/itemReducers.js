import { ITEM_TYPES } from "../types";
const INITIAL_VALUE = {
  items: [],
};

const itemReducers = (state = INITIAL_VALUE, action) => {
  return actions[action.type]
    ? actions[action.type](state, action.payload)
    : state;
};

const actions = {
  [ITEM_TYPES.ADD_ITEM]: (state, payload) => ({
    ...state,
    items: [...state.items, payload],
  }),
};

export default itemReducers;
