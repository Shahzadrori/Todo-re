import { ADD_TASK, CLEAR, DELETE_TASK } from "./type";
export const addtask = (Task) => {
    return {
        type: ADD_TASK,
        payload: {
            label: Task,
            id: Math.ceil(Math.random() * 100)
        }
    }
}

export const deletetask =(id) =>{
    
    return{
        type : DELETE_TASK,
        payload : id
    }
}
export const cleartask = (Task) =>{
    return{
        type : CLEAR ,
        payload : {
            label : Task
        }
    }
}