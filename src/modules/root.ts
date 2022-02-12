import {combineReducers} from '@reduxjs/toolkit';
import quotePrevention from './quotePrevention';
import todos from './todos';
import bgImage from './bgImage';

const rootReducer = combineReducers({
  quotePrevention,
  todos,
  bgImage,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
