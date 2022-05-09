import { ADD_EXPENSE } from "../action-types/expenses";

const initiallist = {
  expenseList: [],
};
export const expenseReducer = (state = initiallist, action) => {
  switch (action.type) {
    default:
    case ADD_EXPENSE:
      return {
        ...state,
        expenseList: [...state.expenseList, action.data],
      };
  }
};
