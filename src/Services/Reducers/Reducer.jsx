import { ADD_TO_CART, REMOVE_TO_CART } from "../Constatnt";

const initialState = {
  cardData: [],
};
export default function cardItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      // console.warn("reducers",action)
      return [...state, { cardData: action.data }];
    case REMOVE_TO_CART:
      // console.warn("reducers",action)
      state.pop();
      return [...state];
    default:
      return state;
  }
}
