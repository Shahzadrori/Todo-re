import React, { useState, useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { addtask, deletetask, cleartask, edittask } from "../redux/action";
const Contanierr = (props) => {
  useEffect(() => {
    alert("Welcome");
  }, []);
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
                  props.addtask(Task);
                  setTask("");
                }
                if (Task !== "") {
                  if (Edit === true) {
                    props.edittask(Defaultedit);
                    setTask("");
                  }
                } else {
                  alert("Input should be not empty");
                }
              }}
            />
            <DeleteForeverSharpIcon
              className="del"
              onClick={() => setTask("")}
            />
          </div>
          <button
            className="clearbtn"
            onClick={() => {
              props.cleartask();
              setTask("");
            }}
          >
            Clear All
          </button>
        </div>
        <div className="inner">
          <ol>
            {props.task.map((todo, index) => (
              <>
                <div className="list">
                  <DeleteIcon
                    className="btnsub"
                    onClick={() => props.deletetask(todo.id)}
                  />

                  <li key={index}>{todo.label}</li>

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
          </ol>
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
