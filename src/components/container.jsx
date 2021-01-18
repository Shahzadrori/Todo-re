import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
export const Contanierr=()=>{
    return(
        <>
            <div className='wraper'>
            <div className='top'>
                    <h1>TODO List</h1>
                    <div className='btninp'>
                       <input type='text'  />
                     <button >+</button>
                    </div>
                    </div>
                <div className='inner'>

                 
                    <ul>
                        <li>hellog</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                 
                    </ul>
          
                </div>
            </div>
        </>
    )
}