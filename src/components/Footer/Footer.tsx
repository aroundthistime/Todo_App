import React from 'react';
import styled from '@emotion/native';

const Footer = styled.View`
  width: ${props => props.theme.layout.width.toString()}px;
  height: ${props => props.theme.footer.height.toString()}px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${props => props.theme.footer.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.footer.padding.horizontal.toString()}px;
  padding-top: ${props => props.theme.footer.padding.vertical};
  padding-botom: ${props => props.theme.footer.padding.vertical};
  background-color: ${props => props.theme.footer.backgroundColor};
  ${props => props.theme.border.lightGray('top')};
`;

export default Footer;
