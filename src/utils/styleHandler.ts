import {css, ReactNativeStyle} from '@emotion/native';

export const getCircleStyleBySize = (size: number): ReactNativeStyle => {
  return css`
    width: ${size.toString()}px;
    height: ${size.toString()}px;
    border-radius: ${(size / 2).toString()}px;
  `;
};
