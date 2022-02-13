import React from 'react';
import {useBgImageSelectionScreen} from './useBgImageSelectionScreen';
import {BgImages} from './styled';

const BgImageSeletionScreen = () => {
  const {images} = useBgImageSelectionScreen();
  return <BgImages images={images} />;
};

export default BgImageSeletionScreen;
