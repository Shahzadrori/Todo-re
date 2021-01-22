import { ADD_TASK, CLEAR, DELETE_TASK, EDIT_TODO } from "./type";
export const addtask = (Task) => {
  return {
    type: ADD_TASK,
    payload: {
      label: Task,
      id: Math.ceil(Math.random() * 100),
      // id: Date.now()
    },
  };
};

export const deletetask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};
export const cleartask = () => {
  return {
    type: CLEAR,
  };
};

export const edittask = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};
