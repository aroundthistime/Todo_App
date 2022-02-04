import {combineReducers} from '@reduxjs/toolkit';
import quotePrevention from './quotePrevention';
import todos from './todos';

const rootReducer = combineReducers({
  quotePrevention,
  todos,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
