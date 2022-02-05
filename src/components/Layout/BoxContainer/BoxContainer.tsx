import React from 'react';
import styled from '@emotion/native';

const BoxContainer = styled.View`
  width: 100%;
  background-color: white;
  border-radius: ${props => props.theme.layout.borderRadius.toString()}px;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
  ${props => props.theme.shadow.default};
`;

export default BoxContainer;
