import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';export const Contanierr=()=>{
    return(
        <>
            <div className='wraper'>
                <div className='inner'>
                    <h1>TODO List</h1>
                    <div className='btn&inp'>
                       <input type='text'  />
                     <AddBoxIcon />
                    </div>
                    <ol>
                        <li>hello</li>
                    </ol>
                </div>
            </div>
        </>
    )
}