import React from 'react';
import styled, {css} from '@emotion/native';
import {View} from 'react-native';

export const TodoInput = ({children}) => (
  <View
    style={css`
      flex-direction: row;
    `}>
    {children}
  </View>
);

TodoInput.Name = styled.Text`
  width: 200px;
`;

TodoInput.Input = styled.TextInput`
  flex: 1;
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
`;
