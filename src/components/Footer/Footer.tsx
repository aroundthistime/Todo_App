import React from 'react';
import styled, {css, ReactNativeStyle} from '@emotion/native';
import {TouchableOpacity} from 'react-native';
import {FooterBtnContainer, FooterBtnWithContainerText} from './styles';
import {useTheme} from '@emotion/react';
import Button from '../Button/DefaultButton/Button';

type Props = {
  children?: React.ReactElement | React.ReactElement[];
};

const Footer = ({children}: Props) => {
  const {
    footer: {gapBetweenButtons},
  } = useTheme();
  return (
    <Footer.Container>
      {children &&
        React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            style: css`
              margin-right: ${React.Children.count(children) > 0 &&
              index < React.Children.count(children) - 1
                ? gapBetweenButtons.toString()
                : '0'}px;
            `,
          }),
        )}
    </Footer.Container>
  );
};

Footer.Container = styled.View`
  width: ${props => props.theme.layout.width.toString()}px;
  height: ${props => props.theme.footer.height.toString()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: ${props => props.theme.footer.padding.horizontal.toString()}px;
  padding-left: ${props => props.theme.footer.padding.horizontal.toString()}px;
  padding-top: ${props => props.theme.footer.padding.vertical.toString()}px;
  padding-bottom: ${props => props.theme.footer.padding.vertical.toString()}px;
  background-color: ${props => props.theme.footer.backgroundColor};
  ${props => props.theme.border.lightGray('top')};
`;

type FooterButtonWithContainerProps = {
  onPress: Function;
  text: string;
  style?: ReactNativeStyle;
  type: FooterBtnWithContainerType;
};

type FooterBtnWithContainerType = 'primary' | 'secondary' | 'disabled';

Footer.ButtonWithContainer = ({
  onPress,
  text,
  style = {},
  type,
}: FooterButtonWithContainerProps) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={{
      ...css`
        flex: 1;
      `,
      ...style,
    }}>
    <FooterBtnContainer
      style={css`
        background-color: orange;
      `}>
      <FooterBtnWithContainerText>{text}</FooterBtnWithContainerText>
    </FooterBtnContainer>
  </TouchableOpacity>
);

type FooterButtonWithIconProps = {
  children: React.ReactElement;
  onPress: Function;
  text?: string;
};

Footer.ButtonWithIcon = ({
  children,
  onPress,
  text,
}: FooterButtonWithIconProps) => (
  <Button onPress={onPress}>
    <Button.Container
      style={css`
        border-radius: 0;
      `}>
      {children}
      {text && <FooterBtnWithIconText>{text}</FooterBtnWithIconText>}
    </Button.Container>
  </Button>
);

const FooterBtnWithIconText = styled.Text`
  margin-top: 5px;
`;

export default Footer;
