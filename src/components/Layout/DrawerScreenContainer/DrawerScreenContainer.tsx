import styled, {ReactNativeStyle} from '@emotion/native';
import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';
import {DrawerIcon, DrawerScreenBgImage} from './styled';

type Props = {
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const Container = styled(ViewContainer)`
  padding-top: ${props =>
    props.theme.layout.drawerScreen.padding.vertical.toString()}px;
  padding-bottom: ${props =>
    props.theme.layout.drawerScreen.padding.vertical.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  background-color: transparent;
`;

const DrawerScreenContainer: React.FC<Props> = ({children, style = {}}) => {
  return (
    <DrawerScreenBgImage>
      <Container style={{...style}}>
        {children}
        <DrawerIcon />
      </Container>
    </DrawerScreenBgImage>
  );
};

export default DrawerScreenContainer;
