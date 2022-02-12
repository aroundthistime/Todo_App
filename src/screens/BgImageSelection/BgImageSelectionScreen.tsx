import React from 'react';
import ViewContainer from '../../components/Layout/ViewContainer/ViewContainer';
import {BgImages} from './styled';

const BgImageSeletionScreen = () => {
  return (
    <BgImages
      images={[
        require('../../../assets/images/1.png'),
        require('../../../assets/images/2.png'),
        require('../../../assets/images/3.png'),
        require('../../../assets/images/4.png'),
      ]}
    />
  );
};

export default BgImageSeletionScreen;
