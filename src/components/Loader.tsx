import React from 'react';
import {ActivityIndicator} from 'react-native';
import ViewContainer from './Layout/ViewContainer/ViewContainer';

const Loader: React.FC = () => (
  <ViewContainer style={{backgroundColor: 'red'}}>
    <ActivityIndicator size={'large'} />
  </ViewContainer>
);

export default Loader;
