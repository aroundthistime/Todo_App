import React from 'react';
import {useBgImageSelectionScreen} from './useBgImageSelectionScreen';
import {BgImages} from './styled';
import Loader from '../../components/Loader/Loader';

const BgImageSeletionScreen = () => {
  const {images, loading, selectImage} = useBgImageSelectionScreen();
  console.log(images);
  return loading ? (
    <Loader />
  ) : (
    <BgImages images={images} selectImage={selectImage} />
  );
};

export default BgImageSeletionScreen;
