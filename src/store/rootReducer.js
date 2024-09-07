import { combineReducers } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';

const rootReducer = combineReducers({
    menu: menuReducer,
});

export default rootReducer;
