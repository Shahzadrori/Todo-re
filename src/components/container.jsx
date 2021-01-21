import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { addtask, deletetask, cleartask, edittask } from "../redux/action";
const Contanierr = (props) => {
  const [Task, setTask] = useState("");
  const [Edit, setEdit] = useState(false);
  const [Defaultedit, setDefaultedit] = useState();
  return (
    <>
      <div className="wraper">
        <div className="top">
          <h1> TODO List</h1>
          <div className="btninp">
            <input
              type="text"
              value={Task}
              onChange={(eve) => setTask(eve.target.value)}
            />
            <AddCircleIcon
              className="btnadd"
              onClick={() => {
                if (Task !== "") {
                  if (Edit) {
                    props.edittask(Defaultedit);
                    setTask("");
                  } else {
                    props.addtask(Task);
                    setTask("");
                  }
                } else {
                  alert("Input should be not empty");
                }
              }}
            />
          </div>
          <DeleteForeverSharpIcon
            className="clearbtn"
            onClick={() => {
              props.cleartask();
              setTask("");
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
                  <li key={props.id} id={props.id} value={todo.label}>
                    {todo.label}
                  </li>
                  <EditIcon
                    className="edit"
                    onClick={() => {
                      setTask(todo.label);
                      setDefaultedit(todo.id);
                      setEdit(true);
                    }}
                  />
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
    cleartask: () => {
      dispatch(cleartask());
    },
    edittask: (id) => {
      dispatch(edittask(id));
    },
  };
};

export default connect(mapstate, mapdispatch)(Contanierr);
