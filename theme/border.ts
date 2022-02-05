import color from './color';

export type BorderDirection = 'top' | 'bottom' | 'left' | 'right';

export type BorderTheme = Record<
  string,
  (...directions: BorderDirection[]) => string
>;

const getBorderStyleStatement = (
  directions: BorderDirection[],
  borderWidth: number,
  borderColor: string,
): string => {
  let result: string = `border-color : ${borderColor};`;
  for (const direction of directions) {
    result += `border-${direction}-width : ${borderWidth}px;`;
  }
  return result;
};

const border: BorderTheme = {
  lightGray: (...directions: BorderDirection[]) =>
    getBorderStyleStatement(directions, 1, color.lightGray),
};

export default border;
