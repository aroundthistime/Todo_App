import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type BgImage = 1 | 2 | 3;

type BgImageStatus = {
  image: 1 | 2 | 3;
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

export default bgImageSlice;
