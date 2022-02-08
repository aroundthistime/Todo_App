import React from 'react';
import styled, {css} from '@emotion/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Todo} from '../../@types/Todo';
import color from '../../../theme/color';
import ViewContainer from '../Layout/ViewContainer/ViewContainer';
import icon from '../../../theme/icon';
import font from '../../../theme/font';
import {Text} from 'react-native';

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

type TodoStatusIconProps = Pick<Todo, 'cleared' | 'importanceLevel'>;

TodoDetail.TodoStatusIcon = ({
  cleared,
  importanceLevel,
}: TodoStatusIconProps) => {
  const iconName: string = cleared ? 'checkbox-active' : 'checkbox-passive';
  const iconSize: number = font.size.large;
  const iconColor: string =
    importanceLevel === 'high'
      ? color.coral
      : importanceLevel === 'medium'
      ? color.yellow
      : color.green;
  return (
    <Text>
      <Fontisto name={iconName} size={iconSize} color={iconColor} />
      &nbsp;&nbsp;
    </Text>
  );
};

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
  padding-top: ${props => props.theme.layout.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.layout.padding.vertical.toString()}px;
`;

TodoDetail.Content = styled.Text`
  font-size: ${props => props.theme.font.size.default.toString()}px;
`;

export default TodoDetail;
