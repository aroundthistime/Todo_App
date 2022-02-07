import React from 'react';
import styled from '@emotion/native';

export const FooterBtnContainer = styled.View`
  width: 100%;
  flex: 1;
  border-radius: ${props => props.theme.layout.borderRadius.toString()}px;
  justify-content: center;
  align-items: center;
`;

export const FooterBtnWithContainerText = styled.Text`
  font-weight: bold;
  font-size: ${props => props.theme.font.size.default.toString()}px;
  color: white;
`;
