import React from 'react';
import {Image} from 'react-native';
import styled, {css} from '@emotion/native';
import todosBackgroundImage from '../../../assets/images/todos-background.png';
import {useTheme} from '@emotion/react';

export const TodosBgImage = () => {
  const theme = useTheme();
  return (
    <Image
      style={{
        width: theme.layout.width,
        position: 'absolute',
        top: 0,
      }}
      source={todosBackgroundImage}
    />
  );
};
