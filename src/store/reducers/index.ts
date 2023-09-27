import { combineReducers } from '@reduxjs/toolkit';
import user from './userSlice'


export const rootReducer = combineReducers({
    user,
});