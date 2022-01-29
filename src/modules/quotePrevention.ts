import {createSlice} from '@reduxjs/toolkit';
import {getDateTime24HoursFromNow} from '../utils/dates';

interface QuotePrenventionState {
  quotePreventedUntil: number;
}

const initialState: QuotePrenventionState = {
  quotePreventedUntil: 0,
};

const quotePreventionSlice = createSlice({
  name: 'quotePrevention',
  initialState,
  reducers: {
    preventQuoteTill24Hours(state: QuotePrenventionState) {
      state.quotePreventedUntil = getDateTime24HoursFromNow();
    },
  },
});

export const {preventQuoteTill24Hours} = quotePreventionSlice.actions;

export default quotePreventionSlice.reducer;
