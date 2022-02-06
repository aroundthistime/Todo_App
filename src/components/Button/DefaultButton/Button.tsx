import React from 'react';
import styled, {css} from '@emotion/native';
import {StyleObject} from '../../../@types/StyleObject';
import {TouchableOpacity} from 'react-native';

type Props = {
  onPress: Function;
  children?: React.ReactNode;
};

const Button = (props: Props) => (
  <TouchableOpacity onPress={() => props.onPress()}>
    {props.children}
  </TouchableOpacity>
);

Button.Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${props => props.theme.layout.borderRadius.toString()}px;
`;

Button.Text = styled.Text`
  font-size: ${props => props.theme.font.size.default};
  font-weight: bold;
  color: white;
`;

export default Button;
