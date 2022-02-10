import {css} from '@emotion/native';
import {useTheme} from '@emotion/react';
import React from 'react';
import Button from '../DefaultButton/Button';

type Props = {
  onPress: Function;
  children?: React.ReactNode;
};

const FloatingActionButton = (props: Props) => {
  const {
    button: {
      floatingActionButton: {size, positionOffset, color},
    },
    shadow: {default: defaultShadow},
  } = useTheme();
  return (
    <Button
      onPress={props.onPress}
      style={css`
        position: absolute;
        right: ${positionOffset.toString()}px;
        bottom: ${positionOffset.toString()}px;
      `}>
      <Button.Container
        style={css`
          width: ${size.toString()}px;
          height: ${size.toString()}px;
          border-radius: 35px;
          background-color: ${color};
          ${defaultShadow};
        `}>
        {props.children}
      </Button.Container>
    </Button>
  );
};

export default React.memo(FloatingActionButton);
