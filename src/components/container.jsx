import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditIcon from '@material-ui/icons/Edit';
import { connect } from "react-redux";
import { addtask, deletetask, cleartask, edittask } from "../redux/action";
const Contanierr = (props) => {
  console.log("props", props);
  const [Task, setTask] = useState();
  const [item, setitem] = useState();

  return (
    <>
      <div className="wraper">
        <div className="top">
          <h1>TODO List</h1>
          <div className="btninp">
            <input
              type="text"
              value={Task}
              onChange={(eve) => setTask(eve.target.value)}
            />
            <AddCircleIcon
              className="btnadd"
              onClick={() => {props.addtask(Task)
              setTask('')
              }}
            />
          </div>
          <DeleteForeverSharpIcon
            className="clearbtn"
            onClick={() => {props.cleartask(Task)
            setTask('')
            }}
          />
        </div>
        <div className="inner">
          <ul>
            {props.task.map((todo) => (
              <>
                <div className="list">
                  <DeleteIcon
                    className="btnsub"
                    onClick={() => props.deletetask(todo.id)}
                  />

                  <li key={props.id} id={props.id}>
                    {todo.label}
                  </li> <EditIcon className='edit' onClick={()=> {setTask(todo.label)
                  }}/>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
const mapstate = (state) => {
  return {
    task: state.task,
  };
};

const mapdispatch = (dispatch) => {
  return {
    addtask: (Task) => {
      dispatch(addtask(Task));
    },
    deletetask: (id) => {
      dispatch(deletetask(id));
    },
    cleartask: (Task) => {
      dispatch(cleartask(Task));
    },
    edittask : (id) =>{
        dispatch(edittask(id))
    }
  };
};

export default connect(mapstate, mapdispatch)(Contanierr);
