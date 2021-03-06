import { initstate } from "./state";
import { ADD_TASK, DELETE_TASK, CLEAR, EDIT_TODO } from "./type";
export const Reducer = (state = initstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        task: state.task.filter((todo) => todo.id !== action.payload),
      };
    case CLEAR:
      return {
        task: [],
      };
    case EDIT_TODO:
      return {
        ...state,
        task: state.task.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
