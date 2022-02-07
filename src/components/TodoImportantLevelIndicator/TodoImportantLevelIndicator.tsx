import React from 'react';
import {css} from '@emotion/native';
import {Todo} from '../../@types/Todo';
import {useTheme} from '@emotion/react';
import {View} from 'react-native';

type Props = {
  todo: Todo;
  size?: number;
};

const TodoImportantLevelIndicator = React.memo(
  ({todo, size: sizeProp}: Props) => {
    const {
      color: {coral, yellow, green},
      layout: {indicatorSize: defaultSize, columnGap},
    } = useTheme();
    const size = sizeProp ? sizeProp : defaultSize;
    return (
      <View
        style={css`
          opacity: ${todo.cleared ? '0.3' : '1'};
          background-color: ${todo.importanceLevel === 'high'
            ? coral
            : todo.importanceLevel === 'medium'
            ? yellow
            : green};
          width: ${size.toString()}px;
          height: ${size.toString()}px;
          border-radius: ${(size / 2).toString()}px;
          margin-left: ${columnGap.toString()}px;
        `}
      />
    );
  },
);

export default TodoImportantLevelIndicator;
