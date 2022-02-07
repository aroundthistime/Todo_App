import React from 'react';
import styled, {css} from '@emotion/native';
import {Todo} from '../../@types/Todo';
import {useTheme} from '@emotion/react';

const TodoImportantLevelIndicator = styled.View`
  width: ${props => props.theme.layout.indicatorSize.toString()}px;
  height: ${props => props.theme.layout.indicatorSize.toString()}px;
  border-radius: ${props =>
    (props.theme.layout.indicatorSize / 2).toString()}px;
  margin-left: ${props => props.theme.layout.columnGap.toString()}px;
`;

type Props = {
  todo: Todo;
};

export default React.memo(({todo}: Props) => {
  const {
    color: {coral, yellow, green},
  } = useTheme();
  return (
    <TodoImportantLevelIndicator
      style={css`
        opacity: ${todo.cleared ? '0.3' : '1'};
        background-color: ${todo.importanceLevel === 'high'
          ? coral
          : todo.importanceLevel === 'medium'
          ? yellow
          : green};
      `}
    />
  );
});
