import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import {addtask} from '../redux/action'
 const Contanierr=()=>{
     const tas= useSelector((state)=>state.task);
     const dispatch = useDispatch();
     const [Task,setTask] = useState();
    return(
        <>
            <div className='wraper'>
            <div className='top'>
                    <h1>TODO List</h1>
                    <div className='btninp'>
                       <input type='text'  onChange={(eve)=>setTask(eve.target.value)} />
                    <AddCircleIcon className='btnadd' onClick={()=>dispatch(addtask())} />
                    </div>
                    </div>
                <div className='inner'> 
                    <ul>
                     <div className='list'>
                         <DeleteIcon className='btnsub' /> <li>{tas}</li>
                     </div>
                    </ul>
          
                </div>
            </div>
        </>
    )
}

export default Contanierr;