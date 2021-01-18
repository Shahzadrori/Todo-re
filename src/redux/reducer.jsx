import { initstate } from "./state";
import { ADD_TASK } from "./type";

export const Reducer=(state = initstate , action)=>{
    switch(action.type){
     case ADD_TASK:
         return{
         ...state,
         task : state.task - 1
         }
        default:  return state;
    }
}