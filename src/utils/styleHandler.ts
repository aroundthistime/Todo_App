import {css, ReactNativeStyle} from '@emotion/native';
import color from '../../theme/color';
import {ImportanceLevel} from '../@types/Todo';

export const getCircleStyleBySize = (size: number): ReactNativeStyle => {
  return css`
    width: ${size.toString()}px;
    height: ${size.toString()}px;
    border-radius: ${(size / 2).toString()}px;
  `;
};

export const getColorOfImportanceLevel = (
  importanceLevel: ImportanceLevel,
): string =>
  importanceLevel === 'high'
    ? color.coral
    : importanceLevel === 'medium'
    ? color.yellow
    : color.green;
