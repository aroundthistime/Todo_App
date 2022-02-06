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
    color: {coral},
    shadow: {default: defaultShadow},
  } = useTheme();
  return (
    <Button onPress={props.onPress}>
      <Button.Container
        style={css`
          position: absolute;
          bottom: 20px;
          right: 20px;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background-color: ${coral};
          ${defaultShadow};
        `}>
        {props.children}
      </Button.Container>
    </Button>
  );
};

export default FloatingActionButton;
