import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

type BgImage = 1 | 2 | 3 | 4;

type BgImageStatus = {
  image: BgImage;
};

const initialState: BgImageStatus = {
  image: 1,
};

const bgImageSlice = createSlice({
  name: 'bgImage',
  initialState,
  reducers: {
    changeBgImage(state, action: PayloadAction<BgImage>) {
      state.image = action.payload;
    },
  },
});

export const {changeBgImage} = bgImageSlice.actions;

export const bgImageSelector = state =>
  state.bgImage?.image ? state.bgImage.image : 1;

export default bgImageSlice.reducer;
