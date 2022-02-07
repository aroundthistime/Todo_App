import React from 'react';
import styled, {css} from '@emotion/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Todo} from '../../@types/Todo';
import color from '../../../theme/color';
import ViewContainer from '../Layout/ViewContainer/ViewContainer';
import icon from '../../../theme/icon';

type Props = {
  children?: React.ReactNode;
};

const TodoDetail = ({children}: Props) => (
  <TodoDetail.Container>{children}</TodoDetail.Container>
);

TodoDetail.Container = styled(ViewContainer)`
  background-color: white;
`;

TodoDetail.SubContainer = styled.View`
  padding-right: ${props => props.theme.layout.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.layout.padding.horizontal.toString()}px;
`;

TodoDetail.Header = styled(TodoDetail.SubContainer)`
  width: 100%;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  ${props => props.theme.border.lightGray('bottom')};
`;

TodoDetail.HeaderRow = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

TodoDetail.TodoStatusIcon = ({isCleared}: {isCleared: boolean}) =>
  isCleared ? (
    <Icon name="check" color={color.green} size={icon.size.default} />
  ) : (
    <Icon name="exclamation" color={'red'} size={icon.size.default} />
  );

TodoDetail.TodoTitle = styled.Text`
  flex: 1;
  font-size: ${props => props.theme.font.size.large.toString()}px;
  font-weight: bold;
`;

TodoDetail.DeadlineText = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
  opacity: 0.5;
`;

TodoDetail.Body = styled(TodoDetail.SubContainer)`
  flex: 1;
  width: 100%;
  background-color: lightcoral;
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
`;

export default TodoDetail;
