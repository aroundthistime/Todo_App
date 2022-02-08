import React from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {TouchableOpacity} from 'react-native';

type Props = {
  onPress: Function;
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const Button = (props: Props) => (
  <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
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
