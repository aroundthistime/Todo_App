import {useTheme} from '@emotion/react';
import React from 'react';
import PercentageCircleLibrary from './styles';

type Props = {
  percentage: number;
};

const PercentageCircle = (props: Props) => {
  const {
    color: {coral},
    font: {size},
  } = useTheme();
  return (
    <PercentageCircleLibrary
      radius={30}
      percent={props.percentage}
      color={coral}
      textStyle={{fontSize: size.small}}
    />
  );
};

export default PercentageCircle;
