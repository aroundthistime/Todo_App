import {useTheme} from '@emotion/react';
import React from 'react';
import PercentageCircleLibrary from './styled';

type Props = {
  percentage: number;
};

const PercentageCircle = (props: Props) => {
  const {
    color: {coral, yellow, green},
    font: {size},
  } = useTheme();
  return (
    <PercentageCircleLibrary
      radius={30}
      percent={props.percentage}
      color={[coral, yellow, green]}
      textStyle={{fontSize: size.small}}
    />
  );
};

export default PercentageCircle;
