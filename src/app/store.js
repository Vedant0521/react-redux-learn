import { configureStore } from '@reduxjs/toolkit';
import   createReducer  from './reducer';
// Store Configuration
const config = {
    reducer : createReducer
}
const store = configureStore(config); // return a configured redux store.

export default store;