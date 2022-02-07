import React from 'react';
import styled, {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Todo} from '../../@types/Todo';
import color from '../../../theme/color';
import ViewContainer from '../Layout/ViewContainer/ViewContainer';

type Props = {
  children?: React.ReactNode;
};

const TodoDetail = ({children}: Props) => (
  <TodoDetail.Container>{children}</TodoDetail.Container>
);

TodoDetail.Container = styled(ViewContainer)`
  background-color: orange;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
`;

TodoDetail.Header = styled.View`
  background-color: white;
`;

TodoDetail.HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

TodoDetail.TodoStatusIcon = ({isCleared}: {isCleared: boolean}) =>
  isCleared ? (
    <Icon name="check" color={color.green} />
  ) : (
    <Icon name="exclamation" color={'red'} />
  );

TodoDetail.TodoTitle = styled.Text`
  font-size: ${props => props.theme.font.size.large.toString()}px;
  font-weight: bold;
`;

export default TodoDetail;
