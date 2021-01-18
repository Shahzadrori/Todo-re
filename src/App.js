
import React from 'react';
import { Provider } from 'react-redux';
import  Contanierr  from './components/container';

import './css/App.css';
import { store } from './redux/store';
 export const App=()=>{
     return(
         <>
         <Provider store={store}>
             <Contanierr />
             </Provider>
         </>
     )
 }