import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch (err){
    console.log(err);
  }
}
