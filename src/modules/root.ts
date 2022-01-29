import {combineReducers} from '@reduxjs/toolkit';
import quotePrevention from './quotePrevention';

const rootReducer = combineReducers({
  quotePrevention,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
