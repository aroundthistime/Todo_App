import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';

export type BgImage = number | string;

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

export const bgImageSourceSelector = createSelector(bgImageSelector, image =>
  getSourceOfBgImage(image),
);

export const getSourceOfBgImage = (path: BgImage) => {
  if (path === 1) {
    return require('../../assets/images/1.png');
  } else if (path === 2) {
    return require('../../assets/images/2.png');
  } else if (path === 3) {
    return require('../../assets/images/3.png');
  } else if (path === 4) {
    return require('../../assets/images/4.png');
  } else if (path === 5) {
    return require('../../assets/images/5.png');
  } else {
    return {uri: path};
  }
};

export default bgImageSlice.reducer;
