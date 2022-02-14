import React from 'react';
import {useBgImageSelectionScreen} from './useBgImageSelectionScreen';
import {BgImages} from './styled';
import Loader from '../../components/Loader/Loader';

const BgImageSeletionScreen = () => {
  const {images, loading, selectImage, refresh} = useBgImageSelectionScreen();
  return loading ? (
    <Loader />
  ) : (
    <BgImages images={images} selectImage={selectImage} refresh={refresh} />
  );
};

export default BgImageSeletionScreen;
