import React from 'react';
import styled, {ReactNativeStyle} from '@emotion/native';

type Props = {
  children?: React.ReactNode;
  style?: ReactNativeStyle;
};

const BoxContainer = ({children, style = {}}: Props) => (
  <Container style={style}>{children}</Container>
);

const Container = styled.View`
  width: 100%;
  background-color: white;
  border-radius: ${props => props.theme.layout.borderRadius.toString()}px;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
  ${props => props.theme.shadow.default};
`;

BoxContainer.Header = styled.View`
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  ${props => props.theme.border.lightGray('bottom')}
`;

BoxContainer.HeaderRight = styled.View`
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
`;

BoxContainer.Title = styled.Text`
  font-size: ${props => props.theme.font.size.large.toString()}px;
  font-weight: bold;
`;

BoxContainer.SubTitle = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
`;

export default BoxContainer;
