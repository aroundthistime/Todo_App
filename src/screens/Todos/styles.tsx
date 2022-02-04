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

export const TodosContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: ${props => props.theme.layout.borderRadius};
  padding-top: ${props => props.theme.layout.padding.vertical};
  padding-bottom: ${props => props.theme.layout.padding.vertical};
  padding-right: ${props => props.theme.layout.padding.horizontal};
  padding-left: ${props => props.theme.layout.padding.horizontal};
  ${props => props.theme.shadow.default}
`;
