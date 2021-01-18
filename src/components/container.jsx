import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
export const Contanierr=()=>{
    return(
        <>
            <div className='wraper'>
            <div className='top'>
                    <h1>TODO List</h1>
                    <div className='btninp'>
                       <input type='text'  />
                    <AddCircleIcon className='btnadd' />
                    </div>
                    </div>
                <div className='inner'> 
                    <ul>
                     <div className='list'>
                         <DeleteIcon className='btnsub' /> <li>hello</li>
                     </div>
                    </ul>
          
                </div>
            </div>
        </>
    )
}